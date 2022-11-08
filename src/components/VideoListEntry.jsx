var VideoListEntry = (props) => {

  var title = props.entry.snippet.title;
  var description = props.entry.snippet.description;

  return (<div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{title}</div>
      <div className="video-list-entry-detail">{description}</div>
    </div>
  </div> );
};

//* <div><h5><em>videoListEntry</em> view goes here</h5></div> */

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: PropTypes.object.isRequired,
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
