import React from 'react';
import { createComment } from '../../services/commentsService';

export const CommentForm = ({id}) => {

  const [areaValue, setAreaValue] = React.useState('');

  const handleChange = (event) => { 
    const value  = event.target.value;
    setAreaValue(value);
  };

  const handleClick = () => {
    const obj = {};

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const now = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

    obj.name = 'user';
    obj.text = areaValue;
    obj.date = now;

    createComment(id, obj);
    setAreaValue('');

    window.location.reload()
  }

  return (
    <div>
      <textarea onChange={handleChange} value={areaValue} />
      <button onClick={handleClick}> push </button>
    </div>
  );
}
