import searchYouTube from "../lib/searchYouTube.js";
import changeVideoList from "./videoList.js";
import changeVideo from "./currentVideo.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

var handleVideoSearch = q => {
  //TODO:  Write an asynchronous action to handle a video search!
  return dispatch => {
    return searchYouTube({ key: YOUTUBE_API_KEY, query: q, max: 5 }, vList => {
      // dispatch(changeVideo((state = null), action));
      // dispatch(changeVideoList((state = null), action));
      dispatch(changeVideo(vList[0])); //QUESTION: what happens if we just pass store.dispatch?
      dispatch(changeVideoList(vList));
    });
  };

  //invoke dispatch?
  //or create action object?
};


// can be also written in ES6:
// var handleVideoSearch = q => dispatch => {
//     return searchYouTube({ key: YOUTUBE_API_KEY, query: q, max: 5 }, vList => {
//       dispatch(changeVideo(vList[0]));
//       dispatch(changeVideoList(vList));
//     });
//   };
//QUESTION: why is this considered an action creator when it is invoking dispatch?


export default handleVideoSearch;
