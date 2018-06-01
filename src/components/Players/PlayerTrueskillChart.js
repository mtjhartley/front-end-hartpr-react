import React, { Component } from 'react';
import {Line, Bar, HorizontalBar} from 'react-chartjs-2';

const Data = (props) => {
    console.log(props.trueskillHistory)
    // var labels = ["Jan", "Feb", "March"]
    // var data = [1,2,3]

    var labels = []
    var data = []

    for (var idx=props.trueskillHistory.length-1; idx>=0; idx--) {
        labels.push(props.trueskillHistory[idx]["tournamentName"])
        data.push(props.trueskillHistory[idx]["trueskill"])

    }

    labels = labels.slice(0).slice(-10)
    data = data.slice(0).slice(-10)
    //var labels = props.trueskill.map((trueskill) => trueskill.tournamentName)
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
    <div className="col-lg-12">
        <h1>Trueskill History</h1>
        <Line data={Data(props)} />
        <Bar data={Data(props)} />
        <HorizontalBar data={Data(props)} />
    </div>
)

// class PlayerTrueskillChart extends Component {
//     constructor(props){
//         super(props);
//     }

//     createLabel() {

//     }

//     render() {
//         return (
//             <div className="col-lg-12">
//                 <h1>Hello Chart</h1>
//                 <Line data={Data(this.props)} />
//             </div>
//         )
//     }
// }

export default PlayerTrueskillChart;
