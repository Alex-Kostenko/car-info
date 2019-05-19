import React from 'react';
import { comments } from '../../services/commentsService';


export const CommentsList = ({ id }) => {
  console.log(comments);
  console.log(id);

  let arr = comments.concat([]);

  return (
    arr.map((item, index) => (
      <div key={index}> {item.carId === id ?
        <div >
          <div> {item.name} </div>
          <div> {item.date} </div>
          <div> {item.text} </div>
        </div>
        : ''}
      </div>
    ))
  );
}