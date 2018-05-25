import React from 'react'
import { Link } from 'react-router-dom'

export const TournamentRow = ({id, name, url, entrants, 
							date}) => (
	<tr>
		<td>
            <Link to={`/tournaments/${id}`}>{name}</Link>
		</td>
		<td>
			<a href={url} target="_blank">SmashGG</a>
		</td>
		<td>
			{entrants}
		</td>
		<td>
			{date}
		</td>

	</tr>						

)