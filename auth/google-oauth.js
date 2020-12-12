require('dotenv').config();
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const fs = require('fs');

const VIDEO_JOBS = require('../job/video-functions');

const VIDEO_ID = process.env.VIDEO_ID;
const SCOPES = ['https://www.googleapis.com/auth/youtube.force-ssl'];
const TOKEN_PATH = 'auth/youtube-nodejs-quickstart.json';

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw err;
    console.log('Token stored to ' + TOKEN_PATH);
  });
}

function getOauth2Client() {
  const credentials = JSON.parse(process.env.CREDENTIALS);
  const oauth2Client = new OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
  );
  return oauth2Client;
}

function getUrlOAuth(oauth2Client) {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
}

function oAuthHandler(code, oauth2Client) {
  oauth2Client.getToken(code, async function (err, token) {
    if (err) {
      console.log('Error while trying to retrieve access token', err);
      return;
    }
    oauth2Client.credentials = token;
    storeToken(token);
    // TODO config cron
    // TODO validate if there is some secret leaked
    // TODO rewrite the docs comments
    // TODO add twitter hook to write in video description the name of the user that retweets the video tweet
    const views = await VIDEO_JOBS.getVideoViews(
      oauth2Client,
      VIDEO_ID,
      google
    );
    const title = await VIDEO_JOBS.updateVideoTitle(
      oauth2Client,
      VIDEO_ID,
      views,
      google
    );
    console.log('New title ' + title);
  });
}

module.exports = { getOauth2Client, getUrlOAuth, oAuthHandler };
