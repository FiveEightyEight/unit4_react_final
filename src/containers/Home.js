import React, { Component } from 'react';
import Input from '../components/Input';
import NavBar from '../components/NavBar';
import Search from './Search';



class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      query: null,
      searchResults: [],
    }
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
    return;
  }

  handleOnClick = (e) => {
    this.handleSearch()
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch()
    }
  }

  handleSearch = (e) => {
    const value = this.state.inputValue.trim();
    if(!value) return;
    this.setState({
      inputValue: '',
    })
  }

  render() {
    const noSearch = (
      <div className="col align-self-center jumbotron p-2">
      <p className="display-6 pt-2 ml-4"><strong>No Search Results Yet!, Please submit a search above!</strong></p>
      </div>
    )
    return (
      <>
        <NavBar />
        <div className='container'>
        <div className='row'>
          <Input value={this.state.inputValue} handleInputValue={this.handleInputValue} handleEnter={this.handleEnter} handleOnClick={this.handleOnClick}/>
          {!this.query ? noSearch : <Search />}
          </div>
        </div>
      </>
    );
  }
}

export default Home;