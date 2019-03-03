import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';



class App extends Component {

  render() {
    return (
      <Route path='/' exact component={Home} />
    )
  }
}

export default App;
