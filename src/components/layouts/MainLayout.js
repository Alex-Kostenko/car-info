import React from 'react';
import Navigation from "../elements/Navigation";

export default props => {
  return (
    <div>
      <header> <Navigation /> </header>

      {props.children}

      <footer> footer </footer> 
    </div>
  );
}