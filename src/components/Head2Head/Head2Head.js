import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head2HeadSetsTable from './Head2HeadSetsTable';

class Head2Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            player1: null,
            player2: null,
            sets: []
        }
        this.submit = this.submit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.getHead2HeadFromApi = this.getHead2HeadFromApi.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:61775/api/players?OrderBy=tag&pageNumber=1&pageSize=1500`
        axios.get(url)
            .then((response) => {
                this.setState({
                    players: response.data.value
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getHead2HeadFromApi() {
        var player1 = this.state.player1;
        var player2 = this.state.player2;
        const h2hUrl = `http://localhost:61775/api/players/head2head/${player1}/${player2}`

        axios.get(h2hUrl)
            .then((response) => {
                this.setState({
                    sets: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(h2hUrl)
    }

    submit(e) {
        e.preventDefault();
        this.getHead2HeadFromApi()
        console.log(this.state.sets)
        console.log(this.state.players.length)
    }

    handleChange1(e) {
        var playerId = e.target.value
        console.log(e.target.value)
        this.setState({
            player1: playerId
        })
    }

    handleChange2(e) {
        var playerId = e.target.value
        console.log(e.target.value)
        this.setState({
            player2: playerId
        })
    }


    render() {
        return (
        <div>
            <form onSubmit={this.submit} className="form-group">
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="player1">Player 1</label>
                        <select
                            name="player1"
                            className="form-control form-control-lg"
                            value={this.state.player1}
                            onChange={this.handleChange1}
                            >
                            {this.state.players.map((player, i) => (
                                <option key={i} value={player.id}>{player.tag}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="player2">Player 2</label>
                        <select
                            className="form-control form-control-lg"
                            value={this.state.player2}
                            onChange={this.handleChange2}
                            >
                            {this.state.players.map((player, i) => (
                                <option key={i} value={player.id}>{player.tag}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <br />
                <button className="btn btn-primary mb-2 btn-lg btn-block">Let's Ride!</button>
            </form>
            <div>
                <Head2HeadSetsTable sets={this.state.sets}/>
            </div>
        </div>

    )
    }
}

export default Head2Head;
