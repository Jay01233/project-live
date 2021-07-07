const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getTitle", async (req, res) => {
  console.log("test");
  const url = req.query.url;
  console.log("url is: ", url);
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  let title = null;
  let status = null;
  try {
    const theres = await axios.get(`http://${url}`);
    rawHTML = theres.data;
    const { document } = new JSDOM(rawHTML).window;
    title = document.querySelector("title").textContent;
    status = theres.status;
  } catch (err) {
    // console.log(err);
    // status = err.response.status;
    status = 404;
  }

  // res.send(JSON.stringify(theres.data));
  res.send({ status, title });
});

app.listen(PORT, function () {
  console.log("Server is running on Port: ", PORT);
});
