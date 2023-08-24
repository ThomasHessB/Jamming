// SearchResults.js
import React from 'react';
import './SearchResults.css';
import Tracklist from './Tracklist';

class SearchResults extends React.Component {
  render() {
    const { searchResults } = this.props;

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist searchResults={searchResults} />
      </div>
    );
  }
}

export default SearchResults;
