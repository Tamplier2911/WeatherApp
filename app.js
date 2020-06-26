const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
const enforce = require("express-sslify");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const xss = require("xss-clean");
const helmet = require("helmet");

// html engine
const hbs = require("hbs");

// routes
const templateRouter = require("./routes/templateRoutes");

const app = express();
app.enable("trust proxy");

app.use(cors());
app.options("*", cors());

app.use(helmet());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// limiters
app.use(express.json({ limit: "10kb" }));
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in a hour.",
});
app.use("/api", limiter);

// parsers
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// protection
app.use(xss());

// observer logs
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // CONSOLE LOG COOKIES ON EACH REQUEST
  if (process.env.NODE_ENV === "development") {
    // if (req.body) console.log(req.body);
    // if (req.cookies) console.log(req.cookies);
    console.log(req.requestTime);
  }
  next();
});

// server static assets
app.use("/static", express.static(path.join(__dirname, "static")));

// html rendering engine
// app.set("view engine", "pug");
app.set("view engine", "hbs");

// set directory, where views are stored
app.set("views", path.join(__dirname, "views"));

// set directory, where partials are stored
hbs.registerPartials(path.join(__dirname, "views/partials"));

// routes
app.use("/api/v1/template", templateRouter);

if (process.env.NODE_ENV === "production") {
  // compress all response bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(
    express.static(path.join(__dirname, "client/build"), {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        const hashRegExp = new RegExp("\\.[0-9a-f]{8}\\.");
        if (path.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        } else if (hashRegExp.test(path)) {
          res.setHeader("Cache-Control", "max-age=31536000");
        }
      },
    })
  );

  // on request to any route that is not covered - send index html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  // on request to any route that is not covered - send 404 html
  app.get("*", (req, res) => {
    const valuesObject = { title: "404 - Not Found" };
    res.render("404", valuesObject);
  });
}

module.exports = app;
