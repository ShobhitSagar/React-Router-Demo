import React, { useState } from 'react'

function Posts() {
	const [users, setUsers] = useState([])

	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => setUsers(data))

	return (
		<div>
			<h2>Users</h2>
			<hr />
			{users.map((user) => (
				<div key={user.id}>
					<h5>{user.name}</h5>
					<span>{user.email}</span>
					<hr />
				</div>
			))}
		</div>
	)
}

export default Posts
