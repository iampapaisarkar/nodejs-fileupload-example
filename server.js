var express = require('express');

var app = express();
app.set('view engine', 'ejs');

// Define API calls
app.use("/api", require("./routes"));

app.listen(3000);
