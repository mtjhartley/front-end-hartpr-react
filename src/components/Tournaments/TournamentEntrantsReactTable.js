import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";
import {entrantSizeOptions} from '../utils/utils';

class TournamentEntrantsReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entrants : []
        };
    }

    render() {
        const {entrants} = this.props;
        return (
            <div>
                <h2>Entrants</h2>
                <ReactTable
                    data={entrants}
                    columns={[
                        {
                            Header: "Tag",
                            accessor: "tag",
                            Cell: row => (
                                <Link to={`/players/${this.props.game}/${row.original.playerId}`}>{row.value}</Link>)
                        },
                        {
                            Header: "Seed",
                            accessor: "seed",
                            minWidth: 35
                        },
                        {
                            Header: "Placing",
                            accessor: "placing",
                            minWidth: 35
                        }
                    ]}
                    defaultPageSize={16}
                    // pageSize={entrants.length}
                    showPageSizeOptions={true}
                    pageSizeOptions={entrantSizeOptions(this.props.entrants.length)}
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

export default TournamentEntrantsReactTable;
