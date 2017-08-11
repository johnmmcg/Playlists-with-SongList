import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render() {
    let className;

    let songFragments = this.props.songs.map(song => {
      if (song.id === this.props.selectedSongId) {
        className = "selected";
      } else {
        className = "";
      }
      return(
        <Song
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          className={className}
          handleSongSelect={this.props.handleSongSelect}
        />
      )
    });

    return (
      <div className="row">
        <div className="SongList medium-8 columns" >
          <h2>Songs </h2>
          {songFragments}
        </div>
      </div>
    )
  }

}

export default SongCollection;
