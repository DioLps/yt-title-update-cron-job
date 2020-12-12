require('dotenv').config();
const { google } = require('googleapis');
const cron = require('node-cron');
const OAuth2 = google.auth.OAuth2;
const fs = require('fs');

const VIDEO_JOBS = require('../job/video-functions');
const TWITTER_HANDLER = require('../twitter-api/twitter-handler');

const VIDEO_ID = process.env.VIDEO_ID;
const SCOPES = ['https://www.googleapis.com/auth/youtube.force-ssl'];
const TOKEN_PATH = 'auth/youtube-nodejs-quickstart.json';

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 *
 */
function storeToken(token) {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw err;
    console.log('Token stored to ' + TOKEN_PATH);
  });
}

/**
 * GetOauth2Client
 *
 * @returns {OAuth2} A google OAuth2client Object
 *
 */
function getOauth2Client() {
  const credentials = JSON.parse(process.env.CREDENTIALS);
  const oauth2Client = new OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
  );
  return oauth2Client;
}

/**
 * GetUrlOAuth
 *
 * @param {OAuth2} oauth2Client The client OAuth instance
 * @returns {string} A url to the user give the consent and authenticate the app
 *
 */
function getUrlOAuth(oauth2Client) {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
}

/**
 * OAuthHandler
 *
 * @param {string} code The code return by the google OAuth.
 * @param {OAuth2} oauth2Client The client OAuth instance
 *
 */
function oAuthHandler(code, oauth2Client) {
  oauth2Client.getToken(code, function (err, token) {
    if (err) {
      console.log('Error while trying to retrieve access token', err);
      return;
    }
    oauth2Client.credentials = token;
    storeToken(token);

    const tasksYoutube = async () => {
      console.log(
        'scheduler tasksYoutube running...',
        new Date(Date.now()).toLocaleString()
      );
      try {
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
      } catch (error) {
        console.log('Houve um erro! ', error);
      }
    };

    const tasksTwitter = async () => {
      console.log(
        'scheduler tasksTwitter running...',
        new Date(Date.now()).toLocaleString()
      );
      const usersNames = await TWITTER_HANDLER.getRetweetersInfo();
      try {
        const description = await VIDEO_JOBS.updateVideoDescription(
          oauth2Client,
          VIDEO_ID,
          usersNames,
          google
        );
        console.log('New description ' + description);
      } catch (error) {
        console.log('Houve um erro! ', error);
      }
    };

    tasksYoutube();
    tasksTwitter();

    const scheduleOptions = {
      scheduled: true,
      timezone: 'America/Sao_Paulo',
    };

    cron.schedule('*/3 * * * *', tasksYoutube, scheduleOptions);
    cron.schedule('*/30 * * * *', tasksTwitter, scheduleOptions);
  });
}

module.exports = { getOauth2Client, getUrlOAuth, oAuthHandler };
