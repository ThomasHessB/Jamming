// Tracklist.js
import React from 'react';
import './Tracklist.css';
import Track from './Track';

class Tracklist extends React.Component {
  render() {
    const { searchResults } = this.props;

    return (
      <div className="TrackList">
        {searchResults.map((track) => (
          <Track
            key={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}
          />
        ))}
      </div>
    );
  }
}

export default Tracklist;
