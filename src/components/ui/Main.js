import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlayerReactTable from '../Players/PlayerReactTable';
import PlayerRouter from '../Players/PlayerRouter';
import TournamentReactTable from '../Tournaments/TournamentReactTable';
import TournamentRouter from '../Tournaments/TournamentRouter';
import Head2Head from '../Head2Head/Head2Head';
import Search from '../Search/Search';
import About from '../About/About';
import { makeApiRequest } from "../utils/api";
import Whoops404 from "../ui/Whoops404";

function withLoadedData(Component, url, SkeletonComponent) {
    return class WrappedComponent extends Component {
        // get the response
        componentWillMount() {
            this.setState({
                loading: true
            })
            makeApiRequest(url)
                .then(res => {
                    this.setState({ loading: false, res: res})
                    console.log(res)
                    //why do i need to return the response? i dont think i do
                })
                .catch(err => {
                    this.setState({ loading: false, err: err})
                    console.log(err)
                    
                    throw err;
                })
        }
        render() {
            const loading = this.state.loading;
            const err = this.state.err;

            if (loading) {
                return (
                    <div> <SkeletonComponent /> </div>
                );
            }
            if (err) {
                return (<div> 404 </div>)
            }
            return (<Component response={this.state.res} game={this.props.match.params.game}/>)

        }
    }
}


const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path='/' component={PlayerReactTable}/> */}
            <Route path='/players/:game' component={PlayerRouter}/>
            <Route path='/tournaments/:game' component={TournamentRouter}/>
            <Route path='/head2head/:game' component={withLoadedData(Head2Head, `players/melee/?OrderBy=tag&pageNumber=1&pageSize=1500`, Whoops404)}/>
            <Route path='/search' component={Search}/>
            <Route exact path='/about' component={About}/>
            <Redirect from="/" to="/players/melee" />
        </Switch>
    </main>
)

export default Main;
