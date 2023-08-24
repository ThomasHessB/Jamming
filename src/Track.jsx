// Track.js
import React from 'react';
import './Track.css';

class Track extends React.Component {
  render() {
    const { name, artist, album } = this.props;

    if (!searchResults) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{name}</h3>
          <p>
            {artist} | {album}
          </p>
        </div>
        <button className="Track-action">+</button>
      </div>
    );
  }
}

export default Track;
