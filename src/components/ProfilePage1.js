import React from 'react'
import firebase from './firebase'
import { withRouter } from 'react-router-dom'
import './profpagestyle.css';
import './profpagestyles.css'

function ProfilePage1(props) {
    return (
        <div className="header no-shadow">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="logo-prof">
                        <a href="#"><i className="fa fa-facebook-official" aria-hidden="true" id="facebook-logo"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <ul className="header-menu pull-right">
                            <li><a href="#" className="">Requests</a></li>
                            <li><a href="#" className="">Messages</a></li>
                            <li><a href="#" className="">Notifications</a></li>
                            
                            { firebase.getCurrentUsername() }
                            <li><div className="button" onClick={logout}>Log Out</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            )
            async function logout() {
                await firebase.logout()
                props.history.push('/')
            }
}

export default  withRouter(ProfilePage1)