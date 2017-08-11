import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handlePlaylistSelect: props.handlePlaylistSelect
    };
  }
  render() {
    let className;

    let playlistFragments = this.props.playlists.map(playlist => {
      if (playlist.id === this.props.selectedPlaylistId) {
        className = "selected";
      } else {
        className = "";
      }

      return(
        <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          handlePlaylistSelect={this.state.handlePlaylistSelect}
        />
      )
    });

    return (
      <div className="PlaylistCollection medium-4 columns" >
        <h1> Playlists </h1>
        {playlistFragments}
      </div>
    )
  }

}

export default PlaylistCollection;
