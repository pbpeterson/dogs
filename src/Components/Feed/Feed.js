import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
  return (
    <div className="container mainContainer">
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
