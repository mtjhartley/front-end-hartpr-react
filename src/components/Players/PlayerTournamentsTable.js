import React from 'react';
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PlayerTournamentsTable = (props) => (
    <div>
        <h4>Tournaments Attended</h4>
        <table className="table table-bordered table-hover table-sm">
            <thead class="thead-light">
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {props.tournaments.map((tournament, i) => (
                    <tr key={i}>
                        <td><Link to={`/tournaments/${props.game}/${tournament.id}`}>{tournament.name}</Link></td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
) 

export default PlayerTournamentsTable;
