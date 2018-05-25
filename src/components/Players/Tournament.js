import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        this.state = {
            tournament: {},
            sets: [],
            players: [],
        }
    }

    componentDidMount() {
        const url =`http://localhost:61775/api/tournaments/${this.props.match.params.id}`
        
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

        const setsUrl =`http://localhost:61775/api/tournaments/${this.props.match.params.id}/sets`
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

        const playersUrl =`http://localhost:61775/api/tournaments/${this.props.match.params.id}/players`
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
    }

    render() {
        return(
            <div>
                <h1>This is the page for {this.state.tournament.name}</h1>
                <div className='row'>
                    <div className="col-md-4">
                        <h3>Players</h3>
                        {this.state.players.map((player) => (
                            <p><Link to={`/players/${player.id}`}>{player.tag}</Link></p>
                        ))}
                    </div>
                    <div className="col-md-8">
                        <h3>Sets</h3>
                        {this.state.sets.map((set) => (
                            <p><Link to={`/players/${set.winnerId}`}>{set.winner}</Link> - <Link to={`/players/${set.loserId}`}>{set.loser}</Link></p>
                        ))}
                    </div>
                </div>
                {/* <h1>This is a set for {this.state.sets[0].loser}</h1> */}
            </div>
        )
    }
}
export default Tournament;
