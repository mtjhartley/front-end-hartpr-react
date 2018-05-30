import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";

class PlayerTournamentsReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournaments : []
        };
    }

    render() {
        const {tournaments} = this.props;
        const {defaultPageSize} = this.props.tournaments.length;
        return (
            <div>
                <h4>Tournaments Attended</h4>
                <ReactTable
                    data={tournaments}
                    columns={[
                        {
                            Header: "Name",
                            accessor: "name",
                            Cell: row => (
                                <Link to={`/tournaments/${this.props.game}/${row.original.id}`}>{row.value}</Link>)
                        }
                    ]}
                    defaultPageSize={10}
                    pageSize={tournaments.length}
                    showPageSizeOptions={false}
                    showPaginationBottom={false}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}

export default PlayerTournamentsReactTable;
