import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Tournament from './Tournament';
import TournamentReactTable from './TournamentReactTable';


const TournamentRouter = () => (
    <Switch>
        <Route exact path='/tournaments/:game' component={TournamentReactTable}/>
        <Route path="/tournaments/:game/:id" component={Tournament}/>
        <Redirect from="/tournaments" to="/tournaments/melee" />
        
    </Switch>
)

export default TournamentRouter;
