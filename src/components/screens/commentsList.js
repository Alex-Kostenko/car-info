import React from 'react';
import { comments } from '../../services/commentsService';
import { Card, Row, Col } from 'react-bootstrap';

export const CommentsList = ({ id }) => {

  let arr = comments.concat([]);

  return (
    <Row> 
    {arr.map((item, index) => (
      <Col sm={12} key={index}> {item.carId === id ?
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.text}.{' '}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">{item.date}</small>
            </Card.Text>
          </Card.Body>
        </Card>
        : ''}
      </Col>
    ))}
    </Row>
  );
}
