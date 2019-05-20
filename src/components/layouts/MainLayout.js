import React from 'react';
import Navigation from "../elements/Navigation";
// import Spinner from 'react-bootstrap/Spinner';

export default props => {
  return (
    <div>
      <header> <Navigation /> </header>

      {props.children}

      <footer style={{margin: '30px'}}>

        {/* <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />  */}
      </footer> 
    </div>
  );
}
