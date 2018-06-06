import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TournamentEntrantsReactTable from './TournamentEntrantsReactTable';
import TournamentSetsReactTable from './TournamentSetsReactTable';
import TournamentStats from './TournamentStats';
import {makeApiRequest} from "../utils/api";

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
        //const url =`http://hartpr20180601085617.azurewebsites.net/api/tournaments/${this.props.match.params.game}/${this.props.match.params.id}`
        makeApiRequest(`tournaments/${this.props.match.params.game}/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    tournament: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })

        makeApiRequest(`tournaments/${this.props.match.params.game}/${this.props.match.params.id}/sets`)
            .then((response) => {
                this.setState({
                    sets: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })

        //TODO: Evaluate which is more relevant players (with no info besides name and id), or entrants (with seed and placing)
        // makeApiRequest(`tournaments/${this.props.match.params.game}/${this.props.match.params.id}/players`)
        //     .then((response) => {
        //         this.setState({
        //             players: response.data
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        makeApiRequest(`tournaments/${this.props.match.params.game}/${this.props.match.params.id}/entrants`)
            .then((response) => {
                this.setState({
                    entrants: response.data
                })
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
