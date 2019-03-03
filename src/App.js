import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Video from './containers/Video';



class App extends Component {

  render() {
    return (
      <>
      <NavBar />
      <Route path='/' exact component={Home} />
      <Route path='/video/:video_id' exact component={Video} />
      </>
    )
  }
}

export default App;
