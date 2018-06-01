import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SearchResultsReactTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    render() {
        const {results} = this.props;
        return (
            <div>
                <h2>Search Results</h2>
                <ReactTable
                    data={results}
                    columns={[
                        {
                            Header: "Tag",
                            accessor: "tag",
                            Cell: row => (
                                <Link to={`/players/melee/${row.original.id}`}>{row.value}</Link>)
                        },
                        {
                            Header: "Name",
                            accessor: "name",
                        },
                        {
                            Header: "Region",
                            accessor: "state",
                            minWidth: 35
                        }
                    ]}
                    defaultPageSize={25}
                    showPageSizeOptions={true}
                    showPaginationBottom={true}
                    className="-striped -highlight"
                    defaultSorted={[{
                        id: "tag"
                    },
                    {
                        id: "state",
                        desc: true
                    }
                ]}
                    />
            </div>
        )
    }
}

export default SearchResultsReactTable;

