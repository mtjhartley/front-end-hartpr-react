
import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const SearchResults = (props) => {
    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {props.results.map(
                    (result, i) =>
                    <li key={i}><Link target="_blank" to={`players/melee/${result.id}`}>{result.tag} ({result.name})</Link></li>
                )}
            </ul>

        </div>
    )
}