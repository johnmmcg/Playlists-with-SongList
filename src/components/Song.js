import React from 'react';

const Song = (props) => {
  let handleSongSelect = () => {
    props.handleSongSelect(props.id);
  }
  return (
    <div>
      <li className={props.className} onClick={handleSongSelect}> {props.name} - {props.artist} ({props.album})</li>
    </div>
  )
};

export default Song;
