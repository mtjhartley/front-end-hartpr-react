import React, { Component } from 'react';
import axios from 'axios';
import PlayerTournamentsReactTable from './PlayerTournamentsReactTable';
import PlayerSetsReactTable from './PlayerSetsReactTable';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Whoops404 from '../ui/Whoops404';
import { formatDate } from '../utils/utils'

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
            playerLoaded: false,
            setsLoaded: false,
            tournamentsLoaded: false,
            initialLoading: true,
        }
        this.getPlayerInfo = this.getPlayerInfo.bind(this);
        this.loadDummyPlayer = this.loadDummyPlayer.bind(this);
        this.loadDummyTournaments = this.loadDummyTournaments.bind(this);
        this.renderPlayerInfo = this.renderPlayerInfo.bind(this);
        this.renderPlayerStats = this.renderPlayerStats.bind(this);
        this.renderPlayerTournaments = this.renderPlayerTournaments.bind(this);
        this.renderPlayerSets = this.renderPlayerSets.bind(this);
        // this.getPlayerStats = this.getPlayerStats.bind(this);
        this.renderDummyInfo = this.renderDummyInfo.bind(this);
    }

    loadDummyPlayer() {
        return {
            tag: "Dempsey",
            id: 1,
            name: "Michael Hartley",
            character: "Sheik",
            trueskill: 1234,
            state: "WA",
            lastActive: "1-1-1111"
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
                player: response.data,
                playerLoaded: true
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
            var setsWon = sets.filter(set => set.isWin === true).length
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
                gameWinPercentage: gameWinPercentage,
                setsLoaded: true
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
                tournamentsAttended: response.data.length,
                tournamentsLoaded: true
            })
            // console.log(tournamentsUrl)
            // console.log(this.state.tournaments)
        })
        .catch((error) => {
            console.log(error)
        })        
    }

    componentDidMount() {
        this.getPlayerInfo(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        var id = nextProps.match.params.id;
        this.getPlayerInfo(id);
    }

    renderPlayerStats() {
        return (
            <div className="col-md-8">
                <h5>Tournaments attended : {this.state.tournamentsAttended}</h5>
                <h5>Sets Played : {this.state.setsPlayed}</h5>
                <h5>Sets Won : {this.state.setsWon}</h5>
                <h5>Sets Win Percentage : {this.state.setWinPercentage}</h5>
                <h5>Games Played : {this.state.gamesPlayed}</h5>
                <h5>Games Won : {this.state.gamesWon}</h5>
                <h5>Games Win Percentage : {this.state.gameWinPercentage}</h5>
            </div>
        )
    }

    renderPlayerInfo() {
        return (
            <div className="col-md-4">
                <h1 className="text-left">{this.state.player.tag}</h1>
                <h4 className="text-left">{this.state.player.name}</h4>
                <h5 className="text-left">Region: {this.state.player.state}</h5>
                <h2 className="text-left">Trueskill: {this.state.player.trueskill}</h2>
                <h6 className="text-left">Last Active: {formatDate(this.state.player.lastActive)}</h6>
            </div>
        )
    }   

    renderDummyInfo() {
        return (
            <div className="col-md-4">
                <h1 className="text-left">Tag</h1>
                <h4 className="text-left">Name</h4>
                <h5 className="text-left">Region</h5>
                <h2 className="text-left">Trueskill</h2>
                <h6 className="text-left">Last Active</h6>
            </div>
        ) 
    }

    renderPlayerTournaments() {
        return (
            <div className="col-lg-4">
                {/* <PlayerTournamentsTable game={this.props.match.params.game} tournaments={this.state.tournaments} /> */}
                <PlayerTournamentsReactTable game={this.props.match.params.game} tournaments={this.state.tournaments} />
            </div>
        )
    }

    renderPlayerSets() {
        return (
            <div className="col-lg-8">
                {/* <PlayerSetsTable game={this.props.match.params.game} sets={this.state.sets} /> */}
                <PlayerSetsReactTable game={this.props.match.params.game} sets={this.state.sets} />
            </div>
        )
    }

    render() {
        return(
            <div>
            {(this.state.playerLoaded && this.state.setsLoaded && this.state.tournamentsLoaded || !this.state.initialLoading) ? 
                <div>
                    <div className="row">
                        {this.renderPlayerInfo()}
                        {this.renderPlayerStats()}
                    </div>
                    <div className='row'>
                        {this.renderPlayerTournaments()}
                        {this.renderPlayerSets()}
                    </div>
                </div> : 
                <div>
                    <Whoops404 entity={"player"} />
                        <div className="row">
                            {this.renderDummyInfo()}
                            {this.renderPlayerStats()}
                        </div>
                        <div className='row'>
                            {this.renderPlayerTournaments()}
                            {this.renderPlayerSets()}
                        </div>
                </div>
            }
            </div>
        )
    }
}

export default Player;
