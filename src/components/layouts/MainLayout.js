import React from 'react';
import Navigation from "../elements/Navigation";

export default props => {
    return (
        <div>
            <Navigation />

            {props.children}

            <h3>footer</h3>
        </div>
    );
}