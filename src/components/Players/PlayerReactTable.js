import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'

//import { makeData, Logo, Tips } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Player from "./Player";

class PlayerReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
        this.loadDummyPlayers = this.loadDummyPlayers.bind(this);
    }

    loadDummyPlayers() {
        return [
            {
                id: 1,
                character: "Sheik",
                tag: "Dempsey",
                name: "Michael Hartley",
                trueskill: 1234
            },
            {
                id: 2,
                character: "Falco",
                tag: "Dz",
                name: "Mitch Dzugan",
                trueskill: 4209
            },
            {
                id: 3,
                character: "Falcon",
                tag: "MLK$",
                name: "Gary Mai",
                trueskill: 4324
            },
            {
                id: 4,
                character: "Falco",
                tag: "PwrUp!",
                name: "Alex Wallin",
                trueskill: 5555
            },
            {
                id: 5,
                character: "Fox",
                tag: "DavidCanFly",
                name: "David Tze",
                trueskill: 3130
            },
        ]

    }

    componentDidMount() {
        const url = `http://localhost:61775/api/players?State=WA&OrderBy=trueSkill desc&pageNumber=1&pageSize=50`

        axios.get(url)
            .then((response) => {
                this.setState({
                    players: response.data.value
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    players: this.loadDummyPlayers()
                })
            })
    }

    render() {
        const {players} = this.state;
        return (
            <div>
                <h1>WA Players!</h1>
                <ReactTable
                    data={players}
                    
                    columns={[

                        {
                            Header: "Rank",
                            columns: [
                                {
                                    Header: "Rank",
                                    Cell: row => (
                                        <div>{row.index + 1}</div>
                                    )
                                }
                            ]
                        },                        {
                            Header: "Identity",
                            columns: [
                                {
                                    Header: "Tag",
                                    accessor: "tag",
                                    Cell: row => (
                                    <Link to={`/players/${row.original.id}`}>{row.value}</Link>)
                                },
                                {
                                    Header: "Name",
                                    accessor: "name"
                                }
                            ]
                        },
                        {
                            Header: "Character",
                            columns: [
                                {
                                    Header: "Character",
                                    accessor: "character"
                                }
                            ]
                        },
                        {
                            Header: "Trueskill",
                            columns: [
                                {
                                    Header: "Trueskill",
                                    accessor: "trueskill"
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>  
        )
    }
}

export default PlayerReactTable;
