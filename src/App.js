import React from 'react';

function App() {
	const teg = 
	<>
		<input /><br />
		<input /><br />
		<input /><br />
	</>

	const ul_item = 
	<>
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</>

	const tbl_itm =
	<>
		<table>
			<thead>
				<tr>
					<td>
						12
					</td>
					<td>
						12
					</td>
					<td>
						12
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						12
					</td>
					<td>
						12
					</td>
					<td>
						12
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>
						12
					</td><td>
						12
					</td><td>
						12
					</td>
				</tr>
			</tfoot>
		</table>
	</>

	return (
	<>
		{teg}
		{ul_item}
		{tbl_itm}
	</>
	);
}

export default App;