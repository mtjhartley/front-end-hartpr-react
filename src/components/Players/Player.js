import React from 'react';
import Sandbag from '../../assets/sandbag.png';

const Player = ({player}) => (
    <div className="col s4m m4">
        <div className="card">
            <div className="card-image">
                <img src={Sandbag} alt="sandbag"/>
            </div>
            <div className="card-content">
                <p>{player.tag} - {player.trueskill}</p>
            </div>
            <div className="card-action">
                <a href="#">Link to {player.tag}'s page</a>
            </div>
        </div>
    </div>
);

export default Player;
