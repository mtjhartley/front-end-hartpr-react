import React from 'react'
import { Link } from 'react-router-dom'

export const TournamentRow = ({id, name, url, attendees, 
							date, game}) => (
	<tr>
		<td>
            <Link to={`/tournaments/${game}/${id}`}>{name}</Link>
		</td>
		<td>
			<a href={url} target="_blank">SmashGG</a>
		</td>
		<td>
			{attendees}
		</td>
		<td>
			{date}
		</td>

	</tr>						

)