var express = require('express');

var app = express();
app.set('view engine', 'ejs');

// Default Error Handler
app.use((err, req, res, next) => {
    res.status(501);
    res.render("error", { message: err });
});

// Define API calls
app.use("/api", require("./routes"));

app.use("*", (req, res) => {
    console.log("No route matched, hit the catch-all handler");
    res.send("Nope!");
});

const hostPort = process.env.HOST_PORT || 3000;
app.listen(hostPort, () => {
  console.log("Server listening on port " + hostPort);
});

// Export the Express application to be used by Google Cloud Functions.
exports.app = app;

exports.handler = async (event, context) => {
  // Get the Express application
  const { app } = require("./index");

  // Handle the incoming request
  await app(event, context);
};

// app.listen(3000);
