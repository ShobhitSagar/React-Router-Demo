import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Posts from './components/Posts'
import About from './components/About'

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact component={Home} />
			<Route path="/posts" component={Posts} />
			<Route path="/about" component={About} />
		</Router>
	)
}

export default App
