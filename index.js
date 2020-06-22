const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

// SERVER
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `Node.js http server is listening for incomign requests on port ${PORT}!`
  );
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED. Shutting down...");
  server.close(() => {
    console.log("Process terminated...");
  });
});
