import React from 'react';
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {formatDate} from '../utils/utils';

const PlayerSetsTable = (props) => (
    <div>
        <h4>Set History</h4>
        <table className="table table-bordered table-hover table-sm">
            <thead class="thead-light">
                <tr>
                    <th>Opponent</th>
                    <th>Score</th>
                    <th>Tournament</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.sets.map((set, i) => (
                    <tr key={i} style={{backgroundColor: set.isWin ? "#BFE9B1" : "#F8BCC5"}}>
                        <td><Link to={`/players/${props.game}/${set.opponentId}`}>{set.opponent}</Link></td>
                        <td>
                            {(set.isWin) ?
                            <div>{set.winnerScore}-{set.loserScore}</div> :
                            <div>{set.loserScore}-{set.winnerScore}</div>
                            }
                        </td>
                        <td><Link to={`/tournaments/${props.game}/${set.tournamentId}`}>{set.tournament}</Link></td>
                        <td>{formatDate(set.date)}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>  
    </div>
)

export default PlayerSetsTable;
