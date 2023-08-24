// Playlist.js
import React from 'react';
import './Playlist.css';
import Tracklist from './Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <h2>My Playlist</h2>
        <Tracklist />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;