// server
const express = require('express');
const path = require("path");
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static("dist"));
// Our first route
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});
