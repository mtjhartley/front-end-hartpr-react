import React from 'react';
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const formatDate = (inputDate) => {
    var splitDate = inputDate.split('T')[0]
    var date = new Date(splitDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
}

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
                        <td><Link to={`/players/${set.opponentId}`}>{set.opponent}</Link></td>
                        <td>
                            {(set.isWin) ?
                            <div>{set.winnerScore}-{set.loserScore}</div> :
                            <div>{set.loserScore}-{set.winnerScore}</div>
                            }
                        </td>
                        <td><Link to={`/tournaments/${set.tournamentId}`}>{set.tournament}</Link></td>
                        <td>{formatDate(set.date)}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>  
    </div>
)

export default PlayerSetsTable;
