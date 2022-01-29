const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", async (req, res) => {
  const { password, username } = req.body;
  if (!password || !username) {
    res.status(400).json({ successStatus: false });
    return;
  }

  const user = { id: 1, username: "username" };
  res.status(200).json({ successStatus: true, user });
});

module.exports = app;
