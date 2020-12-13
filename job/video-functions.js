function _genericUpdateVideoSnippetInfo(
  service,
  auth,
  VIDEO_ID,
  snippet,
  updatedPropToken
) {
  // TODO return a promise that resolve a given updatePropToken
  // at response.data.snippet[updatedPropToken] when the service.videos.update returns
}

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
  // TODO create a variable called service with the google.youtube method passing the v3 param
  // TODO return a promise with the viewCout property that are in the service.video.list return
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
  // TODO create a variable called service with the google.youtube method passing the v3 param
  // TODO return a promise with the snippet property that are in the service.video.list return
}

/**
 * UpdateVideoDescription (async)
 *
 * @param {OAuth2Client} auth A client with valid credentials
 * @param {string} VIDEO_ID The id of the youtube video
 * @param {Array<string>} usersNames Number of usersname
 * @param {GoogleApis} google An instance of google apis lib
 * @returns {Promise<string>} Promise with the Description
 *
 */
async function updateVideoDescription(auth, VIDEO_ID, usersNames, google) {
  // TODO create a variable called service with the google.youtube method passing the v3 param
  // TODO for each username, check if it already exits in the description and add it if doesn't
  // TODO return the method _genericUpdateVideoSnippetInfo with a string 'description' as the token
}

/**
 * UpdateVideoTitle (async)
 *
 * @param {OAuth2Client} auth A client with valid credentials
 * @param {string} VIDEO_ID The id of the youtube video
 * @param {number} views Number of views
 * @param {GoogleApis} google An instance of google apis lib
 * @returns {Promise<string>} Promise with the title
 *
 */
async function updateVideoTitle(auth, VIDEO_ID, views, google) {
  // TODO create a variable called service with the google.youtube method passing the v3 param
  // TODO get a snippet calling the getVideoSnippet method an uses the views to update the title
  // TODO return the method _genericUpdateVideoSnippetInfo with a string 'title' as the token
}

module.exports = { getVideoViews, updateVideoTitle, updateVideoDescription };
