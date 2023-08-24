// App.js
import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>My Jamming App</h1>
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;