import express from "express";
import bodyParser from "body-parser";

app.use(bodyParser.json());
const app = express();

app.get("users", (req, res) => {
  res.send();
});
