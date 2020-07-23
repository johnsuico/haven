const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Backend server started on port: " + process.env.PORT);
});