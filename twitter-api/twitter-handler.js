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
  return await fetch(
    `https://api.twitter.com/1.1/statuses/retweeters/ids.json?id=${process.env.TWEET_ID}&count=100&stringify_ids=true`,
    HEADERS_GET
  ).then((res) => res.json());
}

/**
 * GetUsersNamesByID
 *
 * @param {string} id User id
 * @returns {Promise<any>} Promise with the username
 *
 */
async function getUsersNamesByID(id) {
  return await fetch(`https://api.twitter.com/2/users/${id}`, HEADERS_GET)
    .then((res) => res.json())
    .then((res) => res.data);
}

/**
 * GetRetweetersInfo
 *
 * @returns {Promise<any>} Promise with an array of username
 *
 */
async function getRetweetersInfo() {
  return new Promise((resolve) => {
    let users = [];
    getRetweetersIds().then((res) => {
      if (res && Array.isArray(res.ids)) {
        const usersNamesPromises = res.ids.map(async (id) => {
          const res = await getUsersNamesByID(id);
          return res.username;
        });

        Promise.all(usersNamesPromises).then((usersNames) => {
          if (usersNames.length > 0) {
            users = usersNames;
          }
          resolve(users);
        });
      }
    });
  });
}

module.exports = { getRetweetersInfo };
