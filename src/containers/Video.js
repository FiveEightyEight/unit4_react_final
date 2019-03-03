import React, { Component } from 'react';
import Comment from '../components/Comment';

const VideoPlayer = ({ id }) => {
    const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;

    return (
        <iframe title='yt-video' type="text/html" width="640" height="360"
            src={link} frameBorder="0"></iframe>
    );
}


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoID: null,
            name: '',
            comment: '',
            comments: [],
        }
    }
    handleInputName = (e) => {
        this.setState({
            name: e.target.value,
        })
        return;
    }
    handleInputComment = (e) => {
        this.setState({
            comment: e.target.value,
        })
        return;
    }

    handleOnClick = (e) => {
        this.handleSubmit()
        return;
    }

    handleEnter = (e) => {
        if (e.keyCode === 13) {
            this.handleSubmit()
            return;
        }
        return;
    }

    handleSubmit = (e) => {
        const name = this.state.name.trim();
        const comment = this.state.comment.trim();

        if (!name || !comment) {
            return alert('ALL Input Fields MUST Be Filled Out')
        }
        let newComments = this.state.comments;
        newComments.unshift({ name, comment })
        this.setState({
            name: '',
            comment: '',
            comments: newComments,
        })

    }

    renderComments = () => {
        if (this.state.comments.length === 0){
            return  (
                <h4>Be the first to comment!</h4>
            )
        } else {
            return this.state.comments.map((e, i) => {
                return (
                    <div className='col-12 my-3' key={i}>
                        <Comment comment={e} />
                    </div>
                )
            })
        }
    }

    componentDidMount() {
        const { video_id } = this.props.match.params;
        this.setState({
            videoID: video_id,
            comments: [],
        })
    }

    componentDidUpdate(p, s) {
        console.log('Previous State: ', s)
        console.log(this.state)
    }

    render() {
        const spin = (
            <div className='col-12'>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
       
        return (
            <div className='mt-5 container'>
                <div className='row'>
                    <div className='mx-auto align-self-center'>
                        {!this.state.videoID ? spin : <VideoPlayer id={this.state.videoID} />}
                    </div>
                    <div className='col-12'>
                        <hr />
                    </div>
                    <div className='col-12'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" value={this.state.name} aria-describedby="emailHelp" placeholder="Name..." onChange={this.handleInputName} onKeyDown={this.handleEnter} />
                            <small id="emailHelp" className="form-text text-muted">Be nice...</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Comment</label>
                            <input type="text" className="form-control" value={this.state.comment} placeholder="..." onChange={this.handleInputComment} onKeyDown={this.handleEnter} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className='col-12 pt-5'>
                        <div className='row'>
                        {this.renderComments()}
                        </div>
                    </div>

                </div>
            </div>
        )

    }

}

export default Video;