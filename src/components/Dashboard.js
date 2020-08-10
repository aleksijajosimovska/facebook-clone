import React, { useEffect, useState } from 'react'
import firebase from './firebase'
import { withRouter } from 'react-router-dom'

import './ProfilePage1';
import ProfilePage1 from './ProfilePage1';
import ProfilePage2 from './ProfilePage2';


function Dashboard(props) {
	const { classes } = props

	if(!firebase.getCurrentUsername()) {
		alert('Please login first')
		props.history.replace('/login')
		return null
	}

	
	return (<div className={classes}>
			<h1 className={classes}>
			
					Hello { firebase.getCurrentUsername() }
                </h1>
				<div className="button" onClick={logout}>Log Out</div>
				<ProfilePage1 />
				<ProfilePage2 />
			</div>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(Dashboard)