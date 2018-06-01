import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate} from '../utils/utils';
import {setSizeOptions} from '../utils/utils'

class PlayerSetsReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sets : []
        };
        this.getTrProps = this.getTrProps.bind(this);
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
                                <Link to={`/players/${this.props.game}/${row.original.opponentId}`}>{row.value}</Link>
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
                            minWidth: 30
                        },
                        {
                            Header: "Tournament",
                            accessor: "tournament",
                            Cell: row => (
                                <Link to={`/tournaments/${this.props.game}/${row.original.tournamentId}`}>{row.value}</Link>
                            ),
                        },
                        {
                            Header: "Date",
                            accessor: "date",
                            Cell: row => (
                                formatDate(row.value)
                            ),
                            minWidth:35
                        }
                    ]}
                    defaultPageSize={16}
                    // pageSize={sets.length}
                    showPageSizeOptions={true}
                    pageSizeOptions={setSizeOptions(sets.length)}
                    showPaginationBottom={true}
                    getTrProps={this.getTrProps}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}

export default PlayerSetsReactTable;
