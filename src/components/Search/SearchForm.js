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
            <div className="col-lg-6 offset-lg-3">
                <input type="text"
                        ref="player"
                        list="players"
                        placeholder="Search for a player..."
                        className="form-control form-control-lg" />
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
        var query =  `players/melee/?searchQuery=${_player.value}&OrderBy=tag&pageNumber=1&pageSize=2000`;
        searchPlayers(query);
        //_player.value=''

    }

    return (

        <form onSubmit={submit} className="form-group">
            <h1>Search for your favorite player!</h1>
            <div className="row">
                <AutoComplete players={players}
                               ref={input => _player = input} />
            </div>                   
            <br />         
            <button className="btn btn-primary mb-2 btn-lg btn-block">Go!!!</button>
        </form>

    )

}