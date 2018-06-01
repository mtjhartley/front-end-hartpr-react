import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton'
import {Pie} from 'react-chartjs-2';

const SetData = (props) => {
    var setsLost = props.player.setsPlayed - props.player.setsWon
    var labels = ["Sets Won", "Sets Lost"]
    var data = [props.player.setsWon, setsLost]
    return(
        {
            labels:labels,
            datasets: [{
                label: "Set history",
                data: data,
                backgroundColor: ["green", "red"],
            }]
        }
        )
    }

const GameData = (props) => {
    var gamesLost = props.player.gamesPlayed - props.player.gamesWon
    var labels = ["Games Won", "Games Lost"]
    var data = [props.player.gamesWon, gamesLost]
    return(
        {
            labels:labels,
            datasets: [{
                label: "Game history",
                data: data,
                backgroundColor: ["green", "red"],
            }]
        }
        )
    }

const PlayerStats = (props) => (
    
    // <div>
    //     <h5>{(props.tournamentsAttended) ? <div>Tournaments attended : {props.tournamentsAttended}</div> : <Skeleton />}</h5>
    //     <h5>{(props.player.setsPlayed) ? <div>Sets Played : {props.player.setsPlayed}</div> : <Skeleton />}</h5>
    //     <h5>{(props.player.setsWon) ? <div>Sets Won : {props.player.setsWon}</div> : <Skeleton />}</h5>
    //     <h5>{(props.player.setWinPercentage) ? <div>Set Win Percentage : {props.player.setWinPercentage}</div> : <Skeleton />}</h5>
    //     <h5>{(props.player.gamesPlayed) ? <div>Games Played : {props.player.gamesPlayed}</div> : <Skeleton />}</h5>
    //     <h5>{(props.player.gamesWon) ? <div>Games Won : {props.player.gamesWon}</div> : <Skeleton />}</h5>
    //     <h5>{(props.player.gameWinPercentage) ? <div>Game Win Percentage : {props.player.gameWinPercentage}</div> : <Skeleton />}</h5>
    // </div>

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

        {/* <div className="row">
        <div classname="col-lg-5">
        <Pie data={SetData(props)}/>
        </div>
        <div classname="col-lg-5">
        

        <Pie data={GameData(props)}/>
        </div>
        </div> */}
    </div>

)

export default PlayerStats;
