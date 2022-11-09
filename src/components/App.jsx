const { useState } = React;
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

var App = () => {
  const [allVideos, setAllVideos] = useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);

  return (<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={currentVideo} />
      </div>
      <div className="col-md-5">
       <VideoList videos={allVideos} state={setCurrentVideo}/>
      </div>
    </div>
  </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
