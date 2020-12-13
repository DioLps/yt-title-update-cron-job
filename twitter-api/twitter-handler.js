require('dotenv').config();
const fetch = require('node-fetch');

const HEADERS_GET = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.TWITTER_API_BEARER_TOKEN,
  },
};

/**
 * GetRetweetersIds
 *
 * @returns {Promise<any>} Promise with an array of ids
 *
 */
async function getRetweetersIds() {

}

/**
 * GetUsersNamesByID
 *
 * @param {string} id User id
 * @returns {Promise<any>} Promise with the username
 *
 */
async function getUsersNamesByID(id) {

}

/**
 * GetRetweetersInfo
 *
 * @returns {Promise<any>} Promise with an array of username
 *
 */
async function getRetweetersInfo() {

}

module.exports = { getRetweetersInfo };
