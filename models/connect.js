const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/Social-Media-db-mern9")
    .then(() => console.log("Database Connection Established"))
    .catch((err) => console.log(err.message));