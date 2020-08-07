import React from 'react'
// import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
// import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import '../LoginPage/loginPageStyle.css'
import Register from '../Register';

// const styles = theme => ({
	
// 	paper: {
// 		marginTop: theme.spacing.unit * 8,
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
// 	},
// 	avatar: {
// 		margin: theme.spacing.unit,
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	submit: {
// 		marginTop: theme.spacing.unit * 3,
// 	},
// })

function LoginPage() {
    return (<div className="navwrapper">
                <div className="navbar">
                        <table className="tablewrapper">
                                <tr>
                                <td className="row1">Email or Phone</td>
                                <td className="row1">Password</td>
                                </tr>
                                <tr>
                                <td>
                                <input 
                                type="text" 
                                className="inputtext"/>
                                </td>
                                <td>
                                <input 
                                type="text" 
                                className="inputtext"/>
                                </td>
                                <td>
                                <div className="button">Log In</div>
                                </td>
                                </tr>
                         </table>
            <h1 
            className="logowrapper">
            facebook
           </h1>
          </div>
          <Register/>
        </div>
       
      
		
	)
}

export default (LoginPage)