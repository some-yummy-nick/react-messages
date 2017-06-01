import React from 'react';
import Comment from './comment';

export default function Comments(props) {
  
    return (
      <div>
          <h3>Comments</h3>
        {props.store.map((comment, i)=><Comment key={i} comment={comment}/>)}
      </div>
    )

};

Comments.propTypes = {};
