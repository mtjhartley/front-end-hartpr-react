import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton'

const PlayerStats = (props) => (
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th colSpan="2">Lifetime Stats</th>
                </tr>
            </thead>    
            <tbody>
                <tr>
                    <td>Tournaments Attended</td>
                    <td>{(props.tournamentsAttended) ? <span>{props.tournamentsAttended}</span> : <Skeleton />}</td>
                </tr>
                <tr>
                    <td>Sets Played</td>
                    <td>{(props.player.setsPlayed) ? <span>{props.player.setsPlayed}</span> : <Skeleton />}</td>
                </tr>
                <tr>
                    <td>Sets Won</td>
                    <td>{(props.player.setsWon) ? <span>{props.player.setsWon}</span> : <Skeleton />}</td>
                </tr>
                <tr>
                    <td>Set Win Percentage</td>
                    <td>{(props.player.setWinPercentage) ? <span>{props.player.setWinPercentage}</span> : <Skeleton />}</td>
                </tr>
                <tr>
                    <td>Games Played</td>
                    <td>{(props.player.gamesPlayed) ? <span>{props.player.gamesPlayed}</span> : <Skeleton />}</td>
                    
                </tr>
                <tr>
                    <td>Games Won</td>
                    <td>{(props.player.gamesWon) ? <span>{props.player.gamesWon}</span> : <Skeleton />}</td>
                </tr>
                <tr>
                    <td>Game Win Percentage</td>
                    <td>{(props.player.gameWinPercentage) ? <span>{props.player.gameWinPercentage}</span> : <Skeleton />}</td>
                </tr>
            </tbody>
        </table>
    </div>

)

export default PlayerStats;
