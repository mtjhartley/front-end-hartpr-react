import React, { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AutoComplete extends Component {
    get value() {
        return this.refs.player.value
    }
    set value(inputValue) {
        this.refs.player.value = inputValue
    }
    render() {
        return (
            <div>
                <input type="text"
                        ref="player"
                        list="players" />
                {/* <datalist id="players">
                    {this.props.players.map(
                        (player, i) =>
                        <option key={i}>{player.tag}</option>
                    )}
                </datalist> */}
            </div>
        )
    }
} 

export const SearchForm = ( {player, players, searchPlayers} ) => {
    let _player;
    const submit = (e) => {
        e.preventDefault();
        console.log('player', _player.value);
        var query =  `http://localhost:61775/api/players/melee/?searchQuery=${_player.value}&OrderBy=tag&pageNumber=1&pageSize=2000`;
        searchPlayers(query);
        //_player.value=''

    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="player_search">Search Player</label>
            <AutoComplete players={players}
                            ref={input => _player = input} />
            <button>Search Player!</button>
        </form>

    )

}