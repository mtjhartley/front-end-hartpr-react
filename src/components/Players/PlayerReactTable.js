import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {makeApiRequest} from "../utils/api";
import {uppercaseString} from "../utils/utils";
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
    }

    componentDidMount() {
        const url = `players/${this.props.match.params.game}?State=WA&OrderBy=trueSkill%20desc&pageNumber=1&pageSize=1000`
        makeApiRequest(url)
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
            })
    }

    render() {
        const {players} = this.state;
        return (

            <div>
                {(this.state.didQueryReturnResults || this.state.firstLoad) ? 
                <div>
                <h1>Washington {uppercaseString(this.props.match.params.game)} Leaderboard</h1>
                <ReactTable
                    data={players}
                    
                    columns={[
                        {
                            Header: "Rank",
                            Cell: row => (
                                <div>{row.index + 1}</div>
                            ),
                            minWidth: 50
                        },
                        {
                            Header: "Tag",
                            accessor: "tag",
                            Cell: row => (
                            <Link to={`/players/${this.props.match.params.game}/${row.original.id}`}>{row.value}</Link>)
                        },
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                    // {
                    //     Header: "Character",
                    //     columns: [
                    //         {
                    //             Header: "Character",
                    //             accessor: "character"
                    //         }
                    //     ]
                    // },
                        {
                            Header: "Trueskill",
                            accessor: "trueskill",
                            minWidth: 50
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
