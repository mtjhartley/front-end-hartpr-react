import React from 'react';
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {formatDate} from '../utils/utils';

// const formatDate = (inputDate) => {
//     var splitDate = inputDate.split('T')[0]
//     var date = new Date(splitDate);
//     if (!isNaN(date.getTime())) {
//         // Months use 0 index.
//         return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
//     }
// }

const Head2HeadSetsTable = (props) => (
    <div>
        {/* <h4>Set History</h4> */}
        <table className="table table-bordered table-hover table-sm">
            <thead class="thead-light">
                <tr>
                    <th>Tournament</th>
                    <th>Winner</th>
                    <th>Score</th>
                    <th>Loser</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.sets.map((set, i) => (
                    <tr key={i}>
                        <td><Link to={`/tournaments/${set.tournamentId}`}>{set.tournament}</Link></td>
                        <td><Link to={`/players/${set.winnerId}`}>{set.winner}</Link></td>
                        <td>
                            <div>{set.winnerScore}-{set.loserScore}</div>
                        </td>
                        <td><Link to={`/players/${set.loserId}`}>{set.loser}</Link></td>
                        <td>{formatDate(set.date)}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>  
    </div>
)

export default Head2HeadSetsTable;
