import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
  const [ModalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div className="container mainContainer">
      {ModalPhoto && (
        <FeedModal photo={ModalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
