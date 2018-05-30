import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TournamentTable from './TournamentTable';
import Tournament from './Tournament';


const TournamentRouter = () => (
    <Switch>
        <Route exact path='/tournaments/:game' component={TournamentTable}/>
        <Route path="/tournaments/:game/:id" component={Tournament}/>
        <Redirect from="/tournaments" to="/tournaments/melee" />
        
    </Switch>
)

export default TournamentRouter;
