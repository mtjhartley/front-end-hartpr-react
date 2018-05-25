import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Player from './Player'
import PlayerTable from './PlayerTable';

const PlayerRouter = () => (
    <Switch>
        <Route exact path='/players' component={PlayerTable} />
        <Route path="/players/:id" component={Player} />
    </Switch>
)

export default PlayerRouter;
