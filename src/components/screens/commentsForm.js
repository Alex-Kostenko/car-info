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
    <div className="container">
      <form action="http://localhost:3000/submit" method="post">
        <div className="form-group">
          <div className="row justify-content-center">
            <input className="form-control col-8 my-2" type="text" name="userName" placeholder="User name" />
            <textarea className="form-control col-8 my-2" name="comment" onChange={handleChange} value={areaValue} placeholder="Comment" />
            <Button variant="outline-primary" type="submit" className="w-100 col-8 my-2" value="Submit"> Submit </Button>{/* onClick={handleClick} */}
          </div>
          <input type="hidden" name='data' value={nowData()} />
          <input type="hidden" name='id' value={id} />
        </div>
      </form>
    </div>
    

  );
}
