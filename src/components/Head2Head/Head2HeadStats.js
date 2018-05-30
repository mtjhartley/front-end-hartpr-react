import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Head2HeadStats = (props) => (
    <div>
        <h2>Lifetime Stats</h2>
        <div className="row">
            <div className="col-sm-4">
                <h3>{props.stats.player1Tag}</h3>
                <h4>Games Won: {props.stats.player1GameWins}</h4>
            </div>
            <div className="col-sm-4">
                <h3>Set Count</h3>
                <h3>{props.stats.player1SetWins}-{props.stats.player2SetWins}</h3>
            </div>
            <div className="col-sm-4">
                <h3>{props.stats.player2Tag}</h3>
                <h4>Games Won: {props.stats.player2GameWins}</h4>
            </div>
        </div>

    </div>
)

export default Head2HeadStats;
