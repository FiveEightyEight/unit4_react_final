import React, { Component } from 'react';
import Input from '../components/Input';
import VideoBlock from '../components/VideoBlock';
import { Link } from 'react-router-dom';
import { doSearch } from '../services/main';



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
            return;
        }
        return;
    }

    handleSearch = (e) => {
        const value = this.state.inputValue.trim();
        if (!value) return;
        this.setState({
            inputValue: '',
            query: value,
        })
        this.handleAPICall(value)
        return;
    }

    handleAPICall = (query) => {
        doSearch(query)
            .then(data => {
                const newResults = this.state.searchResults.concat(data)
                this.setState({
                    searchResults: newResults,
                })
            })
            .catch(err => {
                console.log('Error Loading Search: ', err)
            })
        return;
    }

    handleLoading = () => {
        if (this.state.searchResults.length === 0) {
            return (
                <div className='col-12'>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (

                <div className='row'>
                    {this.state.searchResults.map((e, i) => {
                        return (
                            <div className='col-6 p-2' key={i}>
                                <Link to={'/video/' + e.videoId} style={{ color: '#000' }}>
                                    <VideoBlock video={e} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        const noSearch = (
            <div className="col align-self-center jumbotron p-2">
                <p className="display-6 pt-2 ml-4"><strong>No Search Results Yet!, Please submit a search above!</strong></p>
            </div>
        )
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <Input value={this.state.inputValue} handleInputValue={this.handleInputValue} handleEnter={this.handleEnter} handleOnClick={this.handleOnClick} />
                        {!this.state.query ? noSearch : this.handleLoading()}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;