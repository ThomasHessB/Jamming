// App.js
import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

class App extends React.Component {
  state = {
    searchResults: [
      {
        id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        album: 'Album 1',
      },
      {
        id: '2',
        name: 'Track 2',
        artist: 'Artist 2',
        album: 'Album 2',
      },
      {
        id: '3',
        name: 'Track 3',
        artist: 'Artist 3',
        album: 'Album 3',
      },
      {
        id: '4',
        name: 'Track 4',
        artist: 'Artist 4',
        album: 'Album 4',
      },
      {
        id: '5',
        name: 'Track 5',
        artist: 'Artist 5',
        album: 'Album 5',
      },
      // Add more tracks as needed
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>My Jamming App</h1>
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
