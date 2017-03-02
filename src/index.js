import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAnjj4QDfxeYPmX4bVlYMeE8StNATEz2xQ';


// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
      //can also use this.setState({ videos});
    });
  }

  render() {
    return(
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
// const is ES6 syntax; declaring a variable but cannot change the variable; a constant variable

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
