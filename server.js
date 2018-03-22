"use strict";
const express = require("Express");
const path = require("path");
const app = express();

let port = 3000

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(path.sesolve(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
