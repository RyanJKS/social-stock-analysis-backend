const router = require("express").Router();
const request = require("request");

// use for url search ==> url + query wanted + api_url
const base_url = "https://www.alphavantage.co/query?function=";
const api_url = `&apikey=${process.env.ALPHAVANTAGE_API_KEY}`;

//FIND TICKER SYMBOL BASED ON WORD INPUT (USED FOR SEARCH FILTER) - TICKER SEARCH
router.get("/stock/:name", (req, res) => {
  const tickerName = req.params.name;
  const url = base_url + `SYMBOL_SEARCH&keywords=${tickerName}` + api_url;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json("Internal Server Error");
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send("Request Failed");
      } else {
        // data is successfully parsed as a JSON object:
        res.status(200).json(data);
      }
    }
  );
});

//GLOBAL QUOTE FOR TICKER - QUOTE ENDPOINT
router.get("/quote/:symbol", (req, res) => {
  const symbol = req.params.symbol;
  const url = base_url + `GLOBAL_QUOTE&symbol=${symbol}` + api_url;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json("Internal Server Error");
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send("Request Failed");
      } else {
        // data is successfully parsed as a JSON object:
        res.status(200).json(data);
      }
    }
  );
});

//NEWS SENTIMENT - SENTIMENT ENDPOINT
router.get("/news-sentiment/:symbol", (req, res) => {
  const symbol = req.params.symbol;
  const url = base_url + `NEWS_SENTIMENT&tickers=${symbol}` + api_url;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json("Internal Server Error");
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send("Request Failed");
      } else {
        // data is successfully parsed as a JSON object:
        res.status(200).json(data);
      }
    }
  );
});

//COMPANY OVERVIEW STATS - COMPANY OVERVIEW ENDPOINT
router.get("/overview/:symbol", (req, res) => {
  const symbol = req.params.symbol;
  const url = base_url + `OVERVIEW&symbol=${symbol}` + api_url;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json("Internal Server Error");
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send("Request Failed");
      } else {
        // data is successfully parsed as a JSON object:
        res.status(200).json(data);
      }
    }
  );
});

//INCOME STATEMENT FOR BARCHARTS - INCOME STATEMENT ENDPOINT
router.get("/income/statement/:symbol", (req, res) => {
  const symbol = req.params.symbol;
  const url = base_url + `INCOME_STATEMENT&symbol=${symbol}` + api_url;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json("Internal Server Error");
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send("Request Failed");
      } else {
        // data is successfully parsed as a JSON object:
        res.status(200).json(data);
      }
    }
  );
});

module.exports = router;
