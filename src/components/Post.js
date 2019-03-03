import React from 'react';

const Post = (props) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name..." />
                <small id="emailHelp" className="form-text text-muted">Be nice...</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Comment</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="..." />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </>
    )
}

export default Post;