import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";
import {setSizeOptions} from '../utils/utils';


class TournamentSetsReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sets : []
        };
    }

    render() {
        const {sets} = this.props;
        return (
            <div>
                <h2>Sets</h2>
                <ReactTable
                    data={sets}
                    columns={[
                        {
                            Header: "Winner",
                            accessor: "winner",
                            Cell: row => (
                                <Link to={`/players/${this.props.game}/${row.original.winnerId}`}>{row.value}</Link>)
                        },
                        {
                            Header: "Loser",
                            accessor: "loser",
                            Cell: row => (
                                <Link to={`/players/${this.props.game}/${row.original.loserId}`}>{row.value}</Link>)
                        },
                        {
                            Header: "Score",
                            accessor: "score",
                            Cell: row => (
                                <div>{row.original.winnerScore}-{row.original.loserScore}</div>
                            ),
                            sortable: false,
                            minWidth: 35
                        }
                    ]}
                    defaultPageSize={16}
                    // pageSize={sets.length}
                    showPageSizeOptions={true}
                    pageSizeOptions={setSizeOptions(this.props.sets.length)}
                    showPaginationBottom={true}
                    className="-striped -highlight"
                    defaultSorted={[{
                        id: "placing",
                    }]}
                />
            </div>
        )
    }
}

export default TournamentSetsReactTable;
