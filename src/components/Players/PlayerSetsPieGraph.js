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


const PlayerSetsPieGraph = (props) => (
    <div className="row">
        <div classname="col-lg-12">
            <Pie data={SetData(props)}/>
        </div>
        <div classname="col-lg-12 text-right" >
            <Pie data={GameData(props)}/>
        </div>
    </div> 
)

export default PlayerSetsPieGraph;
