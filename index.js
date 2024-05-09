require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4001;

app.get("/createTronWallet", async (req, res) => {
  try {
    const resp = await fetch(`https://api.tatum.io/v3/tron/wallet`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.TATUM_API_KEY,
      },
    });

    const data = await resp.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  res.status(200).json({ mag: "Success", status: 1 });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
