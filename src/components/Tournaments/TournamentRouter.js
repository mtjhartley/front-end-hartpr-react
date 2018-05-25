import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TournamentTable from './TournamentTable';
import Tournament from './Tournament';


const TournamentRouter = () => (
    <Switch>
        <Route exact path='/tournaments' component={TournamentTable}/>
        <Route path="/tournaments/:id" component={Tournament}/>
    </Switch>
)

export default TournamentRouter;
