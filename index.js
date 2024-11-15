require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./routes/Service.route");

app.use(express.json());

const dbConnectionString = require("./config/dbConnection");
dbConnectionString();


app.use("/api/v1", router);
app.get("/", (req, res) =>
{
    res.send("Welcome to healthcare service app");
});


app.listen(PORT, () =>
{
    console.log(`Server is live on port number http://localhost:${PORT}`); 
});