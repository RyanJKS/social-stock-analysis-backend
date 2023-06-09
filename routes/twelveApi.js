const router = require("express").Router();
const axios = require("axios");

//FIND TICKER SYMBOL BASED ON WORD INPUT (USED FOR SEARCH FILTER) - TICKER SEARCH
router.get("/stock", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://twelve-data1.p.rapidapi.com/stocks",
    params: {
      exchange: "NASDAQ",
      format: "json",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_TWELVE_KEY,
      "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
