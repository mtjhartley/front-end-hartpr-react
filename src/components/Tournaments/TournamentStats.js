import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {formatDate} from '../utils/utils';

const TournamentStats = (props) => (
    <div>
        <div className="col-sm-12">
            <h1>{props.tournament.name}</h1>
            <h2>{formatDate(props.tournament.date)}</h2>
            <h3>Entrants: {props.entrants}</h3>
            <h3><a href={`https://smash.gg/tournament/${props.tournament.url}/events/melee-singles/overview`} target="_blank">smash.gg link</a></h3>
        </div>
    </div>
)

export default TournamentStats;
