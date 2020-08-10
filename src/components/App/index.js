import React, { useState, useEffect } from 'react'
import './styles.css'
import LoginPage from '../LoginPage';
import Dashboard from '../Dashboard';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'



export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})


	return firebaseInitialized !== false ? (
		
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		
	) : <div id="loader"></div>
}