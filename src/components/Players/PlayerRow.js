import React from 'react'
import { Link } from 'react-router-dom'

export const PlayerRow = ({id, rank, tag, 
							name, trueskill}) => (
	<tr>
		<td>
			{rank}
		</td>
		<td>
			<Link to={`/players/${id}`}>{tag}</Link>
		</td>
		<td>
			{name}
		</td>
        <td>
			{trueskill}
		</td>
	</tr>						

)

// SkiDayRow.propTypes = {
// 	resort: PropTypes.string.isRequired,
// 	date: PropTypes.string.isRequired,
// 	powder: PropTypes.bool,
// 	backcountry: PropTypes.bool
// }