import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlayerReactTable from '../Players/PlayerReactTable';
import PlayerRouter from '../Players/PlayerRouter';
import TournamentReactTable from '../Tournaments/TournamentReactTable';
import TournamentRouter from '../Tournaments/TournamentRouter';
import Head2Head from '../Head2Head/Head2Head';
import Search from '../Search/Search';
import About from '../About/About';

const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path='/' component={PlayerReactTable}/> */}
            <Route path='/players/react/:game' component={PlayerReactTable}/>
            <Route path='/players' component={PlayerRouter}/>
            <Route path='/tournaments/react/:game' component={TournamentReactTable}/>
            <Route path='/tournaments' component={TournamentRouter}/>
            <Route path='/head2head/:game' component={Head2Head}/>
            <Route path='/search' component={Search}/>
            <Route exact path='/about' component={About}/>
            <Redirect from="/" to="/players" />
            <Redirect from="/players/react" to="/players/react/melee" />
        </Switch>
    </main>
)

export default Main;
