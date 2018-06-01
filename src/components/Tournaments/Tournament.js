import React, { Component } from 'react'
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TournamentEntrantsReactTable from './TournamentEntrantsReactTable';
import TournamentSetsReactTable from './TournamentSetsReactTable';
import TournamentStats from './TournamentStats';
// const Tournament = (props) => {
//     console.log(props);
//     console.log(props.match.params.id);
//     return (
//         <div>
//             <h1>This is a tournaments page</h1>
//         </div>
//     )
// }

class Tournament extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getInitialState = this.getInitialState.bind(this);
    }

    getInitialState() {
        return {
            tournament: {},
            sets: [],
            players: [],
            entrants: [],
        }
    }

    componentDidMount() {
        const url =`http://localhost:61775/api/tournaments/${this.props.match.params.game}/${this.props.match.params.id}`
        
        axios.get(url)
            .then((response) => {
                this.setState({
                    tournament: response.data
                })
                console.log(url)
                console.log(this.state.tournament)
            })
            .catch((error) => {
                console.log(error)
            })

        const setsUrl =`http://localhost:61775/api/tournaments/${this.props.match.params.game}/${this.props.match.params.id}/sets`
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

        const playersUrl =`http://localhost:61775/api/tournaments/${this.props.match.params.game}/${this.props.match.params.id}/players`
        axios.get(playersUrl)
            .then((response) => {
                this.setState({
                    players: response.data
                })
                console.log(playersUrl)
                console.log(this.state.players)
            })
            .catch((error) => {
                console.log(error)
            })

        const entrantsUrl =`http://localhost:61775/api/tournaments/${this.props.match.params.game}/${this.props.match.params.id}/entrants`
        axios.get(entrantsUrl)
            .then((response) => {
                this.setState({
                    entrants: response.data
                })
                console.log(entrantsUrl)
                console.log(this.state.entrants)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <div>
                <TournamentStats tournament={this.state.tournament} entrants={this.state.entrants.length}/>
                <div className='row'>
                    <div className="col-lg-6">
                        <TournamentEntrantsReactTable game={this.props.match.params.game} entrants={this.state.entrants} />
                    </div>
                    <div className="col-lg-6">
                    <TournamentSetsReactTable game={this.props.match.params.game} sets={this.state.sets}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tournament;
