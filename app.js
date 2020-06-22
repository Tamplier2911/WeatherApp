const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
// const enforce = require("express-sslify");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const xss = require("xss-clean");
const helmet = require("helmet");

// routes

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
    if (req.body) console.log(req.body);
    if (req.cookies) console.log(req.cookies);
    console.log(req.requestTime);
  }
  next();
});

// app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

console.log(path.join(__dirname, "uploads"));
console.log(__filename);

app.get("/api/v1/home", (req, res, next) => {
  res.status(200).send(
    `<div>
        <h1>Welcome!</h1>
        <div>
            <a href="/api/v1/help">Need help?</a>
            <a href="/api/v1/weather">Interested in weather forecast?</a>
            <a href="/">Back to Front-End?</a>
        </div>
    </div>`
  );
});

app.get("/api/v1/help", (req, res, next) => {
  res.status(200).send(
    `<div>
        <h1>Help is comming!</h1>
        <div>
            <a href="/api/v1/about">Read more?</a>
        </div>
    </div>`
  );
});

app.get("/api/v1/about", (req, res, next) => {
  res.status(200).send(
    `<div>
        <h1>We are amazing!</h1>
        <div>
            <a href="/api/v1/home">Back to home?</a>
        </div>
    </div>`
  );
});

app.get("/api/v1/weather", (req, res, next) => {
  res.status(200).json({
    success: true,
    forecast: {
      place: "Avdiivka, Donetska Oblast, Ukraine",
      temperature: 26,
      feelslike: 28,
    },
  });
});

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
}

module.exports = app;
