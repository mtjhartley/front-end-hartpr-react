import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Sandbag from '../../assets/sandbag.png';
import axios from 'axios';
import PlayerTournamentsTable from './PlayerTournamentsTable';
import PlayerSetsTable from './PlayerSetsTable';
import PlayerTournamentsReactTable from './PlayerTournamentsReactTable';
import PlayerSetsReactTable from './PlayerSetsReactTable';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {},
            sets: [],
            tournaments: [],
            tournamentsAttended: 0,
            setsPlayed: 0,
            setsWon: 0,
            setWinPercentage: 0,
            gamesPlayed: 0,
            gamesWon: 0,
        }
        this.getPlayerInfo = this.getPlayerInfo.bind(this);
        this.loadDummyPlayer = this.loadDummyPlayer.bind(this);
        this.loadDummyTournaments = this.loadDummyTournaments.bind(this);
        // this.getPlayerStats = this.getPlayerStats.bind(this);
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
        const playerUrl = `http://localhost:61775/api/players/${this.props.match.params.game}/${playerId}`
        const setsUrl = `http://localhost:61775/api/players/${this.props.match.params.game}/${playerId}/sets`
        const tournamentsUrl = `http://localhost:61775/api/players/${this.props.match.params.game}/${playerId}/tournaments`

        axios.get(playerUrl)
        .then((response) => {
            this.setState({
                player: response.data
            })
            // console.log(playerUrl)
            // console.log(this.state.player)
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get(setsUrl)
        .then((response) => {
            var sets = response.data
            var setsPlayed = sets.length
            var setsWon = sets.filter(set => set.isWin == true).length
            var setWinPercentage = ((setsWon / setsPlayed) * 100).toFixed(2);
            var gamesPlayed = 0
            var gamesWon = 0
            for (var idx=0; idx < sets.length; idx++) {
                var set = sets[idx];
                gamesPlayed += set.winnerScore
                gamesPlayed += set.loserScore
                gamesWon += (set.isWin ? set.winnerScore : set.loserScore)
            }
            var gameWinPercentage = ((gamesWon / gamesPlayed) * 100).toFixed(2);
            
            this.setState({
                sets: sets,
                setsPlayed: setsPlayed,
                setsWon: setsWon,
                setWinPercentage: setWinPercentage,
                gamesPlayed: gamesPlayed,
                gamesWon: gamesWon,
                gameWinPercentage: gameWinPercentage
            })
            // console.log(setsUrl)
            // console.log(this.state.sets)
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get(tournamentsUrl)
        .then((response) => {
            this.setState({
                tournaments: response.data,
                tournamentsAttended: response.data.length
            })
            // console.log(tournamentsUrl)
            // console.log(this.state.tournaments)
        })
        .catch((error) => {
            console.log(error)
        })

        this.setState({
            loading:true
        })
        
    }

    // getPlayerStats() {
    //     var tournamentsAttended = this.state.tournaments.length;
    //     var setsPlayed = this.state.sets.length;
    //     var setsWon = this.state.sets.filter(set => set.isWin == true).length;
    //     var setWinPercentage = setsPlayed / setsWon 
    //     var gamesPlayed = 0
    //     var gamesWon = 0

    //     console.log("this player attended this many tournaments", this.state.tournaments.length)

    //     this.setState({
    //         tournamentsAttended: tournamentsAttended,
    //         setsPlayed: setsPlayed,
    //         setsWon: setsWon,
    //         setWinPercentage: setWinPercentage,
    //         gamesPlayed: gamesPlayed,
    //         gamesWon: gamesWon,
    //     })
    // }

    componentDidMount() {
        this.getPlayerInfo(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        var id = nextProps.match.params.id;
        this.getPlayerInfo(id);
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h3>{this.state.player.name}</h3>
                        <h4>Trueskill: {this.state.player.trueskill}</h4>
                    </div>
                    <div className="col-md-8">
                        <h5>Tournaments attended : {this.state.tournamentsAttended}</h5>
                        <h5>Sets Played : {this.state.setsPlayed}</h5>
                        <h5>Sets Won : {this.state.setsWon}</h5>
                        <h5>Sets Win Percentage : {this.state.setWinPercentage}</h5>
                        <h5>Games Played : {this.state.gamesPlayed}</h5>
                        <h5>Games Won : {this.state.gamesWon}</h5>
                        <h5>Games Win Percentage : {this.state.gameWinPercentage}</h5>
                        
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4">
                        <PlayerTournamentsTable tournaments={this.state.tournaments} />
                        <PlayerTournamentsReactTable game={this.props.match.params.game} tournaments={this.state.tournaments} />
                    </div>
                    <div className="col-md-8">
                        <PlayerSetsTable sets={this.state.sets} />
                        <PlayerSetsReactTable sets={this.state.sets} />
                    </div>
                </div>

            </div>  
        )
    }
}

export default Player;
