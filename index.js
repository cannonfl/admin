// server
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./src/config/keys');
require('./models/user');
require('./src/services/passportConfig');

let mongoURL = `mongodb://${keys.mongoPassword}:${keys.mongoPassword}@ds121248.mlab.com:21248/flcadmin`;
mongoose.connect(keys.mongoUri, (err, success) => {
  if (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
  else {
    console.log('Successfully logged into the MongoDB Database');
  }
});

const app = express();
require('./src/routes/authRoutes')(app);

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));

// Our first route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});
