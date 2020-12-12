/**
 * GetVideoViews
 *
 * @param {OAuth2Client} auth A client with valid credentials
 * @param {string} VIDEO_ID The id of the youtube video
 * @param {GoogleApis} google An instance of google apis lib
 * @returns {Promise<number>} Promise with number of views
 *
 */
function getVideoViews(auth, VIDEO_ID, google) {
  // TODO using the google param asing a service variable with the youtube v3 api object
  // TODO in the next step when you will use the service.video.list, the auth, a part='statistics' and the video id are required as the first param, the secound is the callback where the views are resolved
  // TODO create and return a promise that resolves the service.video.list result (you will have to find inside the response the viewCount property)
}

/**
 * GetVideoSnippet
 *
 * @param {OAuth2Client} auth A client with valid credentials
 * @param {string} VIDEO_ID The id of the youtube video
 * @param {GoogleApis} google An instance of google apis lib
 * @returns {Promise<number>} Promise with snippets of the video
 *
 */
function getVideoSnippet(auth, VIDEO_ID, google) {
  // TODO using the google param asing a service variable with the youtube v3 api object
  // TODO in the next step when you will use the service.video.list, the auth, a part='snippet' and the video id are required as the first param, the secound is the callback where the views are resolved
  // TODO create and return a promise that resolves the service.video.list result (you will have to find inside the response the snippet property)
}

/**
 * UpdateVideoTile (async)
 *
 * @param {OAuth2Client} auth A client with valid credentials
 * @param {string} VIDEO_ID The id of the youtube video
 * @param {number} views Number of views
 * @param {GoogleApis} google An instance of google apis lib
 * @returns {Promise<string>} Promise with the title
 *
 */
async function updateVideoTitle(auth, VIDEO_ID, views, google) {
  // TODO using the google param asing a service variable with the youtube v3 api object
  // TODO create a variable snippet with the return value from a call to getVideoSnippet method
  // TODO asign the snippet.title property with the new title
  // TODO in the next step when you will use the service.video.update, the auth, a part='snippet' and
  // an object with the video id and the snippet property are required as the first param, the secound is the callback where the views are resolved
  // TODO create and return a promise that resolves the service.video.update result (you will have to find inside the response the title property)
}

module.exports = { getVideoViews, updateVideoTitle };
