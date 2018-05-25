import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Sandbag from '../../assets/sandbag.png';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {},
            sets: [],
            tournaments: []
        }
        this.getPlayerInfo = this.getPlayerInfo.bind(this);
        this.loadDummyPlayer = this.loadDummyPlayer.bind(this);
        this.loadDummyTournaments = this.loadDummyTournaments.bind(this);
    }

    loadDummyPlayer() {
        return {
            tag: "Dempsey",
            id: 1,
            name: "Michael Hartley",
            character: "Sheik",
            trueskill: 1234
        }
    }

    loadDummyTournaments() {
        return [
            {
                id: "1",
                name: "Tony Town 2",
                url: "tony-town-2",
                date: "2007-04-20",
                entrants: 64
            },
            {
                id: "2",
                name: "Dawg Pound",
                url: "the-dawg-pound",
                date: "2008-02-10",
                entrants: 32
            },
        ]
    }

    getPlayerInfo(playerId) {
        const playerUrl = `http://localhost:61775/api/players/${playerId}`
        const setsUrl = `http://localhost:61775/api/players/${playerId}/sets`
        const tournamentsUrl = `http://localhost:61775/api/players/${playerId}/tournaments`

        axios.get(playerUrl)
        .then((response) => {
            this.setState({
                player: response.data
            })
            console.log(playerUrl)
            console.log(this.state.player)
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get(setsUrl)
        .then((response) => {
            this.setState({
                sets: response.data
            })
            console.log(setsUrl)
            console.log(this.state.sets)
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get(tournamentsUrl)
        .then((response) => {
            this.setState({
                tournaments: response.data
            })
            console.log(tournamentsUrl)
            console.log(this.state.tournaments)
        })
        .catch((error) => {
            console.log(error)
        })
        
    }

    componentDidMount() {
        this.getPlayerInfo(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        var id = nextProps.match.params.id;
        this.getPlayerInfo(id);
    }

    render() {
        return(
            <div>
                <h1>This is the page for {this.state.player.name}</h1>
                <div className='row'>
                    <div className="col-md-4">
                        <h3>Tournaments</h3>
                        {this.state.tournaments.map((tournament) => (
                            <p><Link to={`/tournaments/${tournament.id}`}>{tournament.name}</Link></p>
                        ))}
                    </div>
                    <div className="col-md-8">
                        <h3>Sets</h3>
                        {this.state.sets.map((set) => (
                            <p><Link to={`/players/${set.winnerId}`}>{set.winner}</Link> vs. <Link to={`/players/${set.loserId}`}>{set.loser}</Link> {set.tournament}</p>
                        ))}
                    </div>
                </div>

            </div>  
        )
    }
}

export default Player;
