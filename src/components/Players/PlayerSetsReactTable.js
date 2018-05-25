import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactTable from "react-table";
import "react-table/react-table.css";

class PlayerSetsReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sets : []
        };
        this.formatDate = this.formatDate.bind(this);
        this.getTrProps = this.getTrProps.bind(this);
    }

    formatDate(inputDate) {
        var splitDate = inputDate.split('T')[0]
        var date = new Date(splitDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
    }

    getTrProps = (state, rowInfo, instance) => {
        if (rowInfo) {
            console.log(rowInfo)
            return {
                style: {
                    background: rowInfo.original.isWin === true ? "#BFE9B1" : "#F8BCC5",
                }
            }
        } else {
            console.log(rowInfo)
        }
        return {};
    }

    render() {
        const {sets} = this.props;
        return (
            <div>
                <h4>Set History</h4>
                <ReactTable
                    data={sets}
                    columns={[
                        {
                            Header: "Opponent",
                            accessor: "opponent",
                            Cell: row => (
                                <Link to={`/players/${row.original.opponentId}`}>{row.value}</Link>
                            ),
                        },
                        {
                            Header: "Score",
                            accessor: "winnerScore",
                            Cell: row => (
                                    (row.original.isWin) ? 
                                    <div>{row.original.winnerScore}-{row.original.loserScore}</div> :
                                    <div>{row.original.loserScore}-{row.original.winnerScore}</div>
                            ),
                        },
                        {
                            Header: "Tournament",
                            accessor: "tournament",
                            Cell: row => (
                                <Link to={`/tournaments/${row.original.tournamentId}`}>{row.value}</Link>
                            ),
                        },
                        {
                            Header: "Date",
                            accessor: "date",
                            Cell: row => (
                                this.formatDate(row.value)
                            ),
                        }
                    ]}
                    defaultPageSize={10}
                    pageSize={sets.length}
                    showPageSizeOptions={false}
                    showPaginationBottom={false}
                    getTrProps={this.getTrProps}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}

export default PlayerSetsReactTable;
