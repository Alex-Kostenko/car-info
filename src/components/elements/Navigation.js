import React from 'react';
import { Link } from "react-router-dom";

export default () => {
    return (
        <ul>
            <li>
                <Link to="/">brand</Link>
            </li>
            <li>
                <Link to="/all">all</Link>
            </li>
        </ul>
    );
}