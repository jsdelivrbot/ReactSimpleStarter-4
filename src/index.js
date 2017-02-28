import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAnjj4QDfxeYPmX4bVlYMeE8StNATEz2xQ'

// Create a new component. This component should produce some HTML

const App = () => {
  return (<div>
    <SearchBar />
  </div>
  );
}
// const is ES6 syntax; declaring a variable but cannot change the variable; a constant variable

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
