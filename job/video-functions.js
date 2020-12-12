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
  const service = google.youtube('v3');
  return new Promise((resolve, reject) => {
    service.videos.list(
      {
        auth: auth,
        part: 'statistics',
        id: VIDEO_ID,
      },
      function (err, response) {
        if (err) return reject(err);
        resolve(response.data.items[0].statistics.viewCount);
      }
    );
  });
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
  const service = google.youtube('v3');
  return new Promise((resolve, reject) => {
    service.videos.list(
      {
        auth: auth,
        part: 'snippet',
        id: VIDEO_ID,
      },
      function (err, response) {
        if (err) return reject(err);
        resolve(response.data.items[0].snippet);
      }
    );
  });
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
  const service = google.youtube('v3');
  const snippet = await getVideoSnippet(auth, VIDEO_ID, google);
  snippet.title = `Este vídeo tem ${views} views`;
  return new Promise((resolve, reject) => {
    service.videos.update(
      {
        auth,
        part: 'snippet',
        resource: {
          id: VIDEO_ID,
          snippet,
        },
      },
      function (err, response) {
        if (err) return reject(err);
        resolve(response.data.snippet.title);
      }
    );
  });
}

module.exports = { getVideoViews, updateVideoTitle };
