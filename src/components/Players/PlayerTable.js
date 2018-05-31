import { PlayerRow } from './PlayerRow';
import axios from 'axios';
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

    componentDidMount() {
        const url = `http://localhost:61775/api/players/${this.props.match.params.game}?State=WA&OrderBy=trueSkill%20desc&pageNumber=1&pageSize=50`
        console.log(this.props.match.params.game);
        console.log("this.props.match.params.game");
        //TODO: If params are invalid for game, redirect to 404 error component!
        axios.get(url)
            .then((response) => {
                this.setState({
                    players: response.data.value
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({
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
                })
            })
    }

    render() {
        return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Tag</th>
                        <th>Name</th>
                        <th>Trueskill</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.players.map((player, i) => (
                        <PlayerRow key={i} {...player} game={this.props.match.params.game} rank={i+1} />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
}
        
    

export default PlayerTable;
