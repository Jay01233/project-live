const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");
const axios = require("axios");

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/getTitle", async (req, res) => {
  console.log("test");
  const url = req.query.url;
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  const theres = await axios.get('http://facebook.com')
  // theres=theres.data;
  // res.send(JSON.stringify(theres.data));
  res.send({"status":200,"title":"facebook"})
});


app.listen(PORT, function() {
  console.log("Server is running on Port: ", PORT);
});