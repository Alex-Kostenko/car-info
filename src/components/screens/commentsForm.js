import React from 'react';
import { createComment } from '../../services/commentsService';
import { Button } from 'react-bootstrap';

export const CommentForm = ({id, name}) => {

  const [areaValue, setAreaValue] = React.useState('');
  const style=[
    {display: 'flex', justifyContent: 'center', alignItem: 'center', margin: '30px'},
    { width: '50%', outline: '0px', borderRadius: '5px', marginRight: '5px'},
    {width: '15%'},

  ]

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

    obj.name = name;
    obj.text = areaValue;
    obj.date = now;

    createComment(id, obj);
    setAreaValue('');
    window.location.reload();
  }

  return (
    <div style={style[0]}>
      <textarea style={style[1]} onChange={handleChange} value={areaValue} />
      <Button variant="outline-success" style={style[2]} onClick={handleClick}> ADD </Button>
    </div>
  );
}
