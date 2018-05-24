import React, { Component } from 'react';
import Player from './Player';
//import Error from './Error';

class PlayerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    tag: "Dempsey",
                    trueskill: 1234
                },
                {
                    tag: "Dz",
                    trueskill: 4209
                },
                {
                    tag: "MLK$",
                    trueskill: 4324
                },
                {
                    tag: "PwrUp!",
                    trueskill: 5555
                },
                {
                    tag: "DavidCanFly",
                    trueskill: 3130
                },
            ]
        }
    }

    renderItems() {
        return this.state.players.map((player, i) => (
            <Player key={i} player={player} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default PlayerList
