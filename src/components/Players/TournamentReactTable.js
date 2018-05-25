import React, { Component } from 'react';
//import Player from './Player';
//import Error from './Error';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TournamentReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournaments: [
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
    }

    render() {
        const {tournaments} = this.state;
        return (
            <div>
                <h1>Tournament Stuff!</h1>
                <ReactTable
                    data={tournaments}
                    columns={[
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header:"URL",
                            accessor: "url"
                        },
                        {
                            Header:"Date",
                            accessor: "date"
                        },                        {
                            Header:"Entrants",
                            accessor: "entrants"
                        }
                    ]}
                    defaultPageSize={10}
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
