const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
    // create express app
const app = express();
app.use(cors())
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configuring the database

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Connecting to the database
let conectionString = process.env.connectionString || dbConfig.url
console.log(conectionString)
mongoose
    .connect(conectionString, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });

// define a simple route
app.get("/", (req, res) => {
    res.json({
        message: "Please use one of the API [Add, Delete]",
    });
});

require("./app/routes/user.js")(app);

// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});