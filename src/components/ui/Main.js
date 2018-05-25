import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlayerReactTable from '../Players/PlayerReactTable';
import PlayerRouter from '../Players/PlayerRouter';
import TournamentReactTable from '../Tournaments/TournamentReactTable';
import TournamentRouter from '../Tournaments/TournamentRouter';
import Head2Head from '../Head2Head/Head2Head';
import About from '../About/About';

const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path='/' component={PlayerReactTable}/> */}
            <Route path='/players/react' component={PlayerReactTable}/>
            <Route path='/players' component={PlayerRouter}/>
            <Route path='/tournaments/react' component={TournamentReactTable}/>
            <Route path='/tournaments' component={TournamentRouter}/>
            <Route path='/head2head' component={Head2Head}/>
            <Route exact path='/about' component={About}/>
            <Redirect from="/" to="players" />
        </Switch>
    </main>
)

export default Main;
