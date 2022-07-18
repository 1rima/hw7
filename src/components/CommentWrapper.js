import React from 'react';
import './CommentWrapper.css'

const CommentWrapper = (props) => {
    return (
        <div className='comment'>
          {props.children}  
        </div>
    );
}

export default CommentWrapper;
