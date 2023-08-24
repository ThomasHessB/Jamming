// Playlist.js
import React from 'react';
import './Playlist.css';
import Tracklist from './Tracklist';
import PropTypes from 'prop-types';

class Playlist extends React.Component {
  static propTypes = {
    playlistName: PropTypes.string.isRequired,
    isEditingPlaylistName: PropTypes.bool.isRequired,
    playlistTracks: PropTypes.array.isRequired,
    onNameChange: PropTypes.func.isRequired,
  };

  render() {
    const { playlistName, playlistTracks } = this.props;
    const { isEditingPlaylistName } = this.state;

    return (
      <div className="Playlist">
        {isEditingPlaylistName ? (
          <input
            value={playlistName}
            onChange={this.handlePlaylistNameChange}
            onChange={this.props.onNameChange}
            onBlur={this.toggleEditingPlaylistName}
            autoFocus
          />
        ) : (
          <h2 onClick={this.toggleEditingPlaylistName}>{playlistName}</h2>
        )}

        <h2>My Playlist</h2>
        <Tracklist tracks={playlistTracks} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
