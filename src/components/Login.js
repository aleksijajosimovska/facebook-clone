import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from './firebase'


function SignIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (<div className="navwrapper">
                <div className="navbar">
                        <table className="tablewrapper">
                                <tr>
                                <td className="row1" >Email or Phone</td>
                                <td className="row1"  >Password</td>
                                </tr>
                                <tr>
                                <td>
                                <input 
                                type="text" 
                                className="inputtext" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)}/>
                                </td>
                                <td>
                                <input 
                                type="text" 
                                className="inputtext" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}/>
                                </td>
                                <td>
                                <div className="button" onClick={login}>Log In</div>
                                </td>
                                </tr>
                         </table>
            <h1 
            className="logowrapper">
            facebook
           </h1>
          </div>
          
        </div>
       
	)

	async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(SignIn)