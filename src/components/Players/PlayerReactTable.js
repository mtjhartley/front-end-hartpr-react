import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

//import { makeData, Logo, Tips } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Whoops404 from '../ui/Whoops404';

class PlayerReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            didQueryReturnResults: false,
            firstLoad: true
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
        const url = `http://hartpr20180601085617.azurewebsites.net/api/players/${this.props.match.params.game}?State=WA&OrderBy=trueSkill%20desc&pageNumber=1&pageSize=50`
        console.log(this.props.match.params.game);
        console.log("this.props.match.params.game");
        axios.get(url)
            .then((response) => {
                this.setState({
                    players: response.data.value,
                    didQueryReturnResults: response.data.value.length === 0 ? false: true,
                    firstLoad: false
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    firstLoad: false,
                    didQueryReturnResults: false
                })
                // this.setState({
                //     players: this.loadDummyPlayers()
                // })
            })
    }

    render() {
        const {players} = this.state;
        return (

            <div>
                {(this.state.didQueryReturnResults || this.state.firstLoad) ? 
                <div>
                <h1>Washington {this.props.match.params.game} Players!</h1>
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
                                    <Link to={`/players/${this.props.match.params.game}/${row.original.id}`}>{row.value}</Link>)
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
                </div> :
                <Whoops404 entity={"players"}/>
                }
            </div>  
        )
    }
}

export default PlayerReactTable;
