import React, { Component } from 'react';
import axios from 'axios';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';
import PlayerTrueskillChart from './PlayerTrueskillChart';
import PlayerSetsPieGraph from './PlayerSetsPieGraph';
import PlayerTournamentsReactTable from './PlayerTournamentsReactTable';
import PlayerSetsReactTable from './PlayerSetsReactTable';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getInitialState = this.getInitialState.bind(this);
        this.getPlayerInfo = this.getPlayerInfo.bind(this);
        this.loadDummyPlayer = this.loadDummyPlayer.bind(this);
        this.loadDummyTournaments = this.loadDummyTournaments.bind(this);
        this.renderPlayerInfo = this.renderPlayerInfo.bind(this);
        this.renderPlayerStats = this.renderPlayerStats.bind(this);
        this.renderPlayerTournaments = this.renderPlayerTournaments.bind(this);
        this.renderPlayerSets = this.renderPlayerSets.bind(this);
        this.renderTrueskillHistory = this.renderTrueskillHistory.bind(this);
        this.renderPlayerSetsPieGraph = this.renderPlayerSetsPieGraph.bind(this);
        // this.getPlayerStats = this.getPlayerStats.bind(this);
    }

    getInitialState() {
        return {
            player: {},
            sets: [],
            tournaments: [],
            playerStats: {},
            trueskillHistory: [],
            tournamentsAttended: null,
            setsPlayed: null,
            setsWon: null,
            setWinPercentage: null,
            gamesPlayed: null,
            gamesWon: null,
        }
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
        const playerUrl = `http://hartpr20180601085617.azurewebsites.net/api/players/${this.props.match.params.game}/${playerId}`
        const setsUrl = `http://hartpr20180601085617.azurewebsites.net/api/players/${this.props.match.params.game}/${playerId}/sets`
        const tournamentsUrl = `http://hartpr20180601085617.azurewebsites.net/api/players/${this.props.match.params.game}/${playerId}/tournaments`
        const trueskillHistoryUrl = `http://hartpr20180601085617.azurewebsites.net/api/players/${this.props.match.params.game}/${playerId}/trueskillhistory`

        axios.get(playerUrl)
        .then((response) => {
            this.setState({
                player: response.data,
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
                playerStats: {
                    setsPlayed: setsPlayed,
                    setsWon: setsWon,
                    setWinPercentage: setWinPercentage,
                    gamesPlayed: gamesPlayed,
                    gamesWon: gamesWon,
                    gameWinPercentage: gameWinPercentage,
                },
                setsPlayed: setsPlayed,
                setsWon: setsWon,
                setWinPercentage: setWinPercentage,
                gamesPlayed: gamesPlayed,
                gamesWon: gamesWon,
                gameWinPercentage: gameWinPercentage,
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
            })
            // console.log(tournamentsUrl)
            // console.log(this.state.tournaments)
        })
        .catch((error) => {
            console.log(error)
        })        

        axios.get(trueskillHistoryUrl)
        .then((response) => {
            this.setState({
                trueskillHistory: response.data
            })
        })
    }

    componentDidMount() {
        this.getPlayerInfo(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        var id = nextProps.match.params.id;
        this.setState(this.getInitialState())
        this.getPlayerInfo(id);
    }

    renderPlayerStats() {
        return (
            <div className="col-lg-12 d-block d-sm-none">
                <PlayerStats game={this.props.match.params.game} player={this.state.playerStats} tournamentsAttended={this.state.tournamentsAttended}/>
            </div>
        )
    }

    renderPlayerInfo() {
        return (
            <div className="col-lg-12">
                <PlayerInfo game={this.props.match.params.game} player={this.state.player} />
            </div>
        )
    }   

    renderPlayerTournaments() {
        return (
            <div className="col-lg-12">
                {/* <PlayerTournamentsTable game={this.props.match.params.game} tournaments={this.state.tournaments} /> */}
                <PlayerTournamentsReactTable game={this.props.match.params.game} tournaments={this.state.tournaments} />
            </div>
        )
    }

    renderPlayerSets() {
        return (
            <div className="col-lg-12">
                {/* <PlayerSetsTable game={this.props.match.params.game} sets={this.state.sets} /> */}
                <PlayerSetsReactTable game={this.props.match.params.game} sets={this.state.sets} />
            </div>
        )
    }

    renderTrueskillHistory() {
        return (
            <div className="col-lg-12">
                <PlayerTrueskillChart trueskillHistory={this.state.trueskillHistory}/>
            </div>
        )
    }

    renderPlayerSetsPieGraph() {
        return (
            <div className="col-lg-12">
                <PlayerSetsPieGraph player={this.state.playerStats} />
            </div>
        )
    }

    render() {
        return(
            <div>
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.renderPlayerInfo()}
                            {this.renderPlayerStats()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 d-none d-md-block">
                            {this.renderTrueskillHistory()}
                        </div>
                        <div className="col-lg-4 d-none d-md-block">
                            {this.renderPlayerSetsPieGraph()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            {this.renderPlayerTournaments()}
                        </div>
                        <div className="col-lg-8">
                            {this.renderPlayerSets()}
                        </div>
                    </div>
                    {/* <div className="row">
                        {this.renderPlayerStats()}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Player;
