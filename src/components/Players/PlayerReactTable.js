import React, { Component } from "react";
import { render } from "react-dom";
//import { makeData, Logo, Tips } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Player from "./Player";

class PlayerReactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    character: "Sheik",
                    tag: "Dempsey",
                    name: "Michael Hartley",
                    trueskill: 1234
                },
                {
                    character: "Falco",
                    tag: "Dz",
                    name: "Mitch Dzugan",
                    trueskill: 4209
                },
                {
                    character: "Falcon",
                    tag: "MLK$",
                    name: "Gary Mai",
                    trueskill: 4324
                },
                {
                    character: "Falco",
                    tag: "PwrUp!",
                    name: "Alex Wallin",
                    trueskill: 5555
                },
                {
                    character: "Fox",
                    tag: "DavidCanFly",
                    name: "David Tze",
                    trueskill: 3130
                },
            ]
        };
    }

    render() {
        const {players} = this.state;
        return (
            <div>
                <ReactTable
                    data={players}
                    columns={[
                        {
                            Header: "Identity",
                            columns: [
                                {
                                    Header: "Tag",
                                    accessor: "tag"
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
            </div>  
        )
    }
}

export default PlayerReactTable;
