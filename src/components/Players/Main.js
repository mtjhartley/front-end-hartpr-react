import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import PlayerReactTable from './PlayerReactTable';
import PlayerTable from './PlayerTable';
import PlayerRouter from './PlayerRouter';
import TournamentReactTable from './TournamentReactTable';
import TournamentTable from './TournamentTable';
import TournamentRouter from './TournamentRouter';
import About from './About';

const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path='/' component={PlayerReactTable}/> */}
            <Route path='/players/react' component={PlayerReactTable}/>
            <Route path='/players' component={PlayerRouter}/>
            <Route path='/tournaments/react' component={TournamentReactTable}/>
            <Route path='/tournaments' component={TournamentRouter}/>
            <Route exact path='/about' component={About}/>
            <Redirect from="/" to="players" />
        </Switch>
    </main>
)

export default Main;
