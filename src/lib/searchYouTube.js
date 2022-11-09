import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  console.log(query);

  $.ajax({
        url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos?',
        type: 'GET',
        data: {
          order: '-createdAt',
        },
        contentType: 'application/json',
        success: callback,
        error: function(error) {
          console.error('chatterbox: Failed to fetch messages', error);
        }
      });
};

var videoTemplate = {

};

export default searchYouTube;

// {
//   "kind": "youtube#searchResult",
//   "etag": "bwdNgV-HSrz_Ep5y0UQTEE9c7f4",
//   "id": {
//     "kind": "youtube#video",
//     "videoId": "dYh6R4Jhxoo"
//     },
//   "snippet": {
//     "publishedAt": "2020-11-24T17:00:10Z",
//     "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
//     "title": "Kids React To Adult Jokes In Kids&#39; Shows (SpongeBob, Animaniacs, Steven Universe &amp; More!)",
//     "description": "Kids React to adult jokes in kids' TV shows (SpongeBob, StevenUniverse, and more!) Check out previous episodes of this series here! https://bit.ly/39a6Zli Join ...",
//     "thumbnails": {
//       "default": {
//         "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/default.jpg",
//         "width": 120,
//         "height": 90
//       },
//       "medium": {
//         "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/mqdefault.jpg",
//         "width": 320,
//         "height": 180
//       },
//       "high": {
//         "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/hqdefault.jpg",
//         "width": 480,
//         "height": 360
//       }
//     },
//     "channelTitle": "REACT",
//     "liveBroadcastContent": "none",
//     "publishTime": "2020-11-24T17:00:10Z"
//   }
// }


//   readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }