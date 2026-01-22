const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://tool:dqvg1BPGC5uVydnu@cluster0.h2qhrdv.mongodb.net/?appName=Cluster0"
);

async function run() {
  try {
    await client.connect();
    console.log("Connected with Database");

    const db = client.db("tool"); 
    const dataCollection = db.collection("data");

    app.get("/", (req, res) => {
      res.send("This is the server");
    });

    app.get("/to-do-list", async (req, res) => {
      const data = await dataCollection
        .find({ status: "pending" })
        .toArray();
      res.send(data);
    });

    app.get("/completed", async (req, res) => {
      const data = await dataCollection
        .find({ status: "completed" })
        .toArray();
      res.send(data);
    });

    app.post("/add", async (req, res) => {
      const data = req.body;
      const result = await dataCollection.insertOne(data);
      res.send(result);
    });

  } catch (error) {
    console.error("Server error:", error);
  }
}

run();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
