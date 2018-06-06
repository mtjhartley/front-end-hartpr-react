import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Player from './Player'
import PlayerReactTable from './PlayerReactTable';

const PlayerRouter = () => (
    <Switch>
        <Route exact path='/players/:game' component={PlayerReactTable} />
        <Route path="/players/:game/:id" component={Player} />
        <Redirect from="/players" to="/players/melee" />
    </Switch>
)

export default PlayerRouter;
