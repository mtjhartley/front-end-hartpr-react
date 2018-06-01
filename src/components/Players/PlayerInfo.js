import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {formatDate} from '../utils/utils';
import Skeleton from 'react-loading-skeleton'


const PlayerInfo = (props) => (
    <div>
        <h1 className="text-left">{props.player.tag || <Skeleton />}</h1>
        <h4 className="text-left">{props.player.name || <Skeleton />}</h4>
        <h5 className="text-left">{(props.player.state) ? <div>Region: {props.player.state}</div> : <Skeleton />}</h5>
        <h2 className="text-left">{(props.player.trueskill) ? <div>Trueskill: {props.player.trueskill}</div> : <Skeleton />}</h2>
        <h6 className="text-left">{(props.player.lastActive) ? <div>Last Active: {formatDate(props.player.lastActive)}</div> : <Skeleton />}</h6>
    </div>
)

export default PlayerInfo;
