import { TournamentRow } from './TournamentRow';
import axios from 'axios';
// import { Link } from 'react-router';
import React, {Component} from 'react';

class TournamentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournaments: [
                {
                    id: "1",
                    name: "Tony Town 2",
                    url: "https://smash.gg/tournament/tony-hut-jr/events/melee-singles/",
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
                {
                    id: "3",
                    name: "Emerald City I",
                    url: "emerald-city-i",
                    date: "2010-01-20",
                    entrants: 127
                },
                {
                    id: "4",
                    name: "WARcadian",
                    url: "uw-smash-presents-warcadian",
                    date: "2007-04-20",
                    entrants: 37
                },
                {
                    id: "5",
                    name: "Emerald City II",
                    url: "emerald-city-ii",
                    date: "2016-04-09",
                    entrants: 290
                },
            ]
        }
    }

    componentDidMount() {
        const url = `http://hartpr20180601085617.azurewebsites.net/api/tournaments/melee?orderBy=Date%20desc&pageNumber=1&pageSize=25`;

        axios.get(url)
            .then((response) => {
                this.setState({
                    tournaments: response.data.value
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SmashGG</th>
                        <th>Entrants</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tournaments.map((tournament, i) => (
                        <TournamentRow key={i} game={this.props.match.params.game} {...tournament} />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
}
        
    

export default TournamentTable;
