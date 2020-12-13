require('dotenv').config();
const { google } = require('googleapis');
const cron = require('node-cron');
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
 *
 */
function storeToken(token) {
  // TODO using the fs.writeFile, create a file on the TOKEN_PATH location with the stringify token as param
}

/**
 * GetOauth2Client
 *
 * @returns {OAuth2} A google OAuth2client Object
 *
 */
function getOauth2Client() {
  // TODO use the proces.env.CREDENTIALS to get your oauth2 google's credetials json
  // TODO parse the json to an object
  // TODO using the OAuth2 class, create an object called oauth2Client and return it
}

/**
 * GetUrlOAuth
 *
 * @param {OAuth2} oauth2Client The client OAuth instance
 * @returns {string} A url to the user give the consent and authenticate the app
 *
 */
function getUrlOAuth(oauth2Client) {
  // TODO use the client to generate an oauth url (access_type:offline and scope are required params)
}

/**
 * OAuthHandler
 *
 * @param {string} code The code return by the google OAuth.
 * @param {OAuth2} oauth2Client The client OAuth instance
 *
 */
function oAuthHandler(code, oauth2Client) {
  // TODO use the client to get the token
  // TODO update the client credencials
  // TODO store the token
  // TODO call the async function VIDEO_JOBS.getVideoViews to get the views
  // TODO call the async function VIDEO_JOBS.updateVideoTitle to update the video title
  // TODO create a funtion called tasksYoutube, call it once and call the scheduler of the node cron to execute it every 3 minutes
  // TODO call the async function TWITTER_HANDLER.getRetweetersInfo to get the users names
  // TODO call the async function VIDEO_JOBS.updateVideoDescription to update the video description
  // TODO create a funtion called tasksTwitter, call it once and call the scheduler of the node cron to execute it every 30 minutes
}

module.exports = { getOauth2Client, getUrlOAuth, oAuthHandler };
