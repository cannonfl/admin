"use strict";
const express = require("Express");
const path = require("path");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(path.sesolve(__dirname, "public", "index.html"));
});

let port = app.get('port');
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
