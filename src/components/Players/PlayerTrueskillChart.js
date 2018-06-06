import React from 'react';
import {Line, Bar, HorizontalBar} from 'react-chartjs-2';

const Data = (props) => {
    var labels = []
    var data = []

    for (var idx=props.trueskillHistory.length-1; idx>=0; idx--) {
        //TODO: Change this on the backend!
        if (props.trueskillHistory[idx]["trueskill"] !== 0) {
            labels.push(props.trueskillHistory[idx]["tournamentName"].slice(0,24))
            data.push(props.trueskillHistory[idx]["trueskill"])
        }

    }

    labels = labels.slice(0).slice(-8)
    data = data.slice(0).slice(-8)
    return(
        {
            labels:labels,
            datasets: [{
                label: "Trueskill History",
                data: data,
                backgroundColor: "green",
                hoverBackgroundColor: "blue"

            }]
        }
        )
    }

const PlayerTrueskillChart = (props) => (
    
    <div>
        {/* <Line data={Data(props)} /> */}
        {/* <Bar data={Data(props)} /> */}
        <HorizontalBar data={Data(props)} /> 
    </div>
)

export default PlayerTrueskillChart;
