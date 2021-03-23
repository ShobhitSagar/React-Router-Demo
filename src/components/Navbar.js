import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav>
			<Link className="link" to="/">
				Home
			</Link>
			<div className="other-link">
				<Link className="link" to="/users">
					Users
				</Link>
				<Link className="link" to="/about" style={{ marginLeft: '10px' }}>
					About
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
