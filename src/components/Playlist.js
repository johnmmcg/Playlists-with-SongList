import React from 'react';

const Playlist = (props) => {
  let handlePlaylistSelect = () => {
    props.handlePlaylistSelect(props.id);
  }

  return (
    <div>
      <li className={props.className} onClick={handlePlaylistSelect}>{props.name}</li>
    </div>
  )
};

export default Playlist;
