import { PlayerRow } from './PlayerRow';
import { PropTypes } from 'react';
// import { Link } from 'react-router';
import React, {Component} from 'react';

class PlayerTable extends Component {
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
        }
    }

    render() {
        return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Character</th>
                        <th>Tag</th>
                        <th>Name</th>
                        <th>Trueskill</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.players.map((player, i) => (
                        <PlayerRow key={i} {...player} rank={i+1} />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
}
        
    

export default PlayerTable;
