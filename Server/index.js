const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const { MongoClient, SuperApiVersion } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://tool:dqvg1BPGC5uVydnu@cluster0.h2qhrdv.mongodb.net/?appName=Cluster0",
);

async function run() {
  try {
    await client.connect();
    console.log("connected with Database");

    app.get("/", (req, res) => {
      const requestData = req.body;
      const responseData = "This is the server ";
      res.send(responseData);
    });

    app.get("to-do-list", (req, res) => {
      const Data=Db.client.collection("data").find({status:"pending"}).toArray();
    });

    app.get("/completed", (req, res) => {
      const Data=Db.client.collection("data").find({status:"completed"}).toArray();
    });

    app.post("/add", (req, res) => {
      const requestData = req.body;
      const Data = requestData.data;
      const DATA = Db.client.collection("data").insertOne(Data);
      res.send(DATA);
    });
  } catch (e) {}
}
run();

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
