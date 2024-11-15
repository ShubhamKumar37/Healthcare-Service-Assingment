const mongoose = require("mongoose");

async function dbConnectionString() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database is connected successfully");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = dbConnectionString;