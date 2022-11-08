import VideoListEntry from './VideoListEntry.js';
//import PropTypes from '../../../node_modules/prop-types/prop-types.js';

var VideoList = (props) => {
  console.log('props: ', props);

  const videoListEntries = props.data.map((entry) => {
    console.log('map entry param: ', entry);
    return <VideoListEntry key={entry.id.videoId} entry={entry}/>;
  });

  return <div className="video-list">{videoListEntries}</div>;

  // {props.listItems.map((listItem) => (
  //   <GroceryListItem listItem={listItem}/>
  // ))}
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: PropTypes.array.isRequired,
// };

//PropTypes.checkPropTypes()

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//Refactor the VideoList component to dynamically render one VideoListEntry component for each video object in exampleVideoData