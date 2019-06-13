import React from 'react';
import { createComment } from '../../services/commentsService';
import { Button } from 'react-bootstrap';

export const CommentForm = ({id}) => {

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

  const nowData = () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const now = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    return now;
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
    window.location.reload();
  }

  return (
    <div style={style[0]}>
      <form action="http://localhost:3000/submit" method="post">
        <label > User name <input style={style[1]} type="text" name="userName" />  </label>
        <label > Comment <input style={style[1]} name="comment" onChange={handleChange} value={areaValue} /> </label>
        <input type="hidden" name='data' value={nowData()}/>
        <input type="hidden" name='id' value={id}/>
        {/* <input type="submit" style={style[2]} value="Отправить" />  onClick={handleClick} */}
        <Button variant="outline-success" type="submit" style={style[2]} > ADD </Button> {/* onClick={handleClick} */}
      </form>
    </div>
    // <div style={style[0]}>
    //   <textarea style={style[1]} name="userName" onChange={handleChange} value={areaValue} />
    //   <Button variant="outline-success" style={style[2]} onClick={handleClick}> ADD </Button>
    // </div>
  );
}
