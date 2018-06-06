import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";
import {formatDate} from "../utils/utils";
import {makeApiRequest} from "../utils/api";


class TournamentReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournaments: []
        }
        this.loadDummyTournaments = this.loadDummyTournaments.bind(this);
    }

    loadDummyTournaments() {
        return [
            {
                id: "1",
                name: "Tony Town 2",
                url: "tony-town-2",
                date: "2007-04-20",
                entrants: 64
            },
            {
                id: "2",
                name: "Dawg Pound",
                url: "the-dawg-pound",
                date: "2008-02-10",
                entrants: 32
            },
            {
                id: "3",
                name: "Emerald City I",
                url: "emerald-city-i",
                date: "2010-01-20",
                entrants: 127
            },
            {
                id: "4",
                name: "WARcadian",
                url: "uw-smash-presents-warcadian",
                date: "2007-04-20",
                entrants: 37
            },
            {
                id: "5",
                name: "Emerald City II",
                url: "emerald-city-ii",
                date: "2016-04-09",
                entrants: 290
            },
        ]
    }

    componentDidMount() {
        makeApiRequest(`tournaments/${this.props.match.params.game}?OrderBy=Date%20desc&pageNumber=1&pageSize=1000`)
            .then((response) => {
                this.setState({
                    tournaments: response.data.value
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    tournaments: this.loadDummyTournaments()
                })
            })
    }

    render() {
        const {tournaments} = this.state;
        return (
            <div>
                <h1>Washington Melee Tournament Archive</h1>
                <ReactTable
                    data={tournaments}
                    columns={[
                        {
                            Header: "Name",
                            accessor: "name",
                            Cell: row => (
                                <div>
                                    <Link to={`/tournaments/${this.props.match.params.game}/${row.original.id}`}>{row.value}</Link>
                                </div>
                            )
                        },
                        // {
                        //     Header:"URL",
                        //     accessor: "url",
                        //     Cell: row => (
                        //         <a href={`https://smash.gg/tournament/${row.value}/events`}>smash.gg link</a>
                        //     ),
                        //     sortable: false
                        // },
                        {
                            Header:"Entrants",
                            accessor: "attendees",
                            minWidth: 30
                        },
                        {
                            Header:"Date",
                            accessor: "date",
                            Cell: row => formatDate(row.value),
                            minWidth: 45
                        }
                    ]}
                    defaultPageSize={10}
                    pageSize={tournaments.length}
                    className="-striped -highlight"
                    defaultSorted={[{
                        id: "date",
                        desc: true,
                    }]}
                />
            </div>
        )
    }
}

export default TournamentReactTable;
