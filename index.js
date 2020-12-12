const path = require('path');
const express = require('express');
const app = express();

const GOOGLE_OAUTH = require('./auth/google-oauth');
const oauth2Client = GOOGLE_OAUTH.getOauth2Client();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/auth', function (req, res) {
  try {
    const url = GOOGLE_OAUTH.getUrlOAuth(oauth2Client);
    res.redirect(url);
  } catch (error) {
    console.log(error);
    res.sendFile(path.join(__dirname + '/public/erro.html'));
  }
});

app.get('/oauth2callback', function (req, res) {
  try {
    const code = req.query.code;
    GOOGLE_OAUTH.oAuthHandler(code, oauth2Client);
    res.sendFile(path.join(__dirname + '/public/ok.html'));
  } catch (error) {
    console.log(error);
    res.sendFile(path.join(__dirname + '/public/erro.html'));
  }
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on port http://localhost:5000`)
);
