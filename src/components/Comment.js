import React from 'react';


const Comment = (props) => {
    const { name, comment } = props.comment
    return (
        <>
            <div className='pb-2'>
                <span className='h4'>{name}</span>
            </div>
            <div>
                <span className='h6'>{comment}</span>
            </div>
        </>
    )
}

export default Comment;