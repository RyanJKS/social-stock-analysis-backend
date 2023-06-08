const router = require("express").Router();
const axios = require("axios");

//BASE URLS + KEYS
const base_url = "https://finnhub.io/api/v1/";
const api_url = `&token=${process.env.REACT_APP_FINHUB_KEY}`;

router.get("/sentiment/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  let url = base_url + `/stock/social-sentiment?symbol=${symbol}` + api_url;
  try {
    let response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/news/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  let currentDate = new Date();

  // One week before the current date
  let oneWeekBeforeDate = new Date();
  oneWeekBeforeDate.setDate(currentDate.getDate() - 2);
  let currentDateFormat = currentDate.toISOString().split("T")[0];
  let oneWeekBeforeDateFormat = oneWeekBeforeDate.toISOString().split("T")[0];

  let url =
    base_url +
    `/company-news?symbol=${symbol}&from=${oneWeekBeforeDateFormat}&to=${currentDateFormat}` +
    api_url;
  try {
    let response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/recommendation-trends/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  let url = base_url + `/stock/recommendation?symbol=${symbol}` + api_url;
  try {
    let response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
