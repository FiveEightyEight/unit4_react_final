import React from 'react';

const VideoBlock = (props) => {
    const {videoId, thumbnail, videoTitle} = props.video
    // thumbnail
    // title
    // id
    return (
            <div className="card" id="listStatic">
                <img src={thumbnail} className="card-img-top" alt={videoTitle} onClick={props.click} data-id={videoId} />
                <div className="card-body p-1">
                    <h5 className="card-title title" onClick={props.click} data-id={videoId} >{videoTitle}</h5>
                </div>
            </div>
    )
}

export default VideoBlock;