import React from 'react'

export const PlayerRow = ({i, character, tag, 
							name, trueskill}) => (
	<tr>
		<td>
			{i}
		</td>
		<td>
			{character}
		</td>
		<td>
			{tag}
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