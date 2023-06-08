const express = require("express");
require("dotenv").config();
const cors = require("cors");
const alphaRoute = require("./routes/alphaVantageApi");
const twelveRoute = require("./routes/twelveApi");
const finhubRoute = require("./routes/finhubApi");

const app = express();
app.use(express.json());
app.use(cors());

//try
app.get("/", (req, res) => {
  res.json(process.env.REACT_APP_TEST);
});

app.use("/twelve", twelveRoute);
app.use("/alpha", alphaRoute);
app.use("/finhub", finhubRoute);

app.listen(3001, () => console.log("Server running on port 3001"));
