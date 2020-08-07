import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from './firebase'
import './LoginPage/loginPageStyle.css'


function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	    return(<div className="contentwrapper">
                <div className="content">
                    <div className="leftbod">
                        <div className="connect bolder">
                            Connect with friends and the
                            world around you on Facebook.</div>
                                <div className="leftbar">
          <img 
          src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851565_602269956474188_918638970_n.png" alt="" 
          className="iconwrap fb1"
          />
          <div className="fb1">
            <span className="rowtext"/>See photos and updates
            <span className="rowtext2 fb1"/>from friends in News Feed
          </div>
        </div> 
          
          <div className="leftbar">
          <img 
          src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851585_216271631855613_2121533625_n.png" 
          alt="" 
          className="iconwrap fb1"
          />
          <div className="fb1">
            <span className="rowtext">Share what's new</span>
            <span className="rowtext2 fb1">in your life on your timeline</span>
            </div>
          </div>
             
            <div className="leftbar">
          <img 
          src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png " alt="" className="iconwrap fb1"/>
          <div className="fb1">
            <span class="rowtext">Find more</span>
            <span class="rowtext2 fb1">of what you're looking for with graph search</span>
        </div> 
        </div> 
       
            
      </div>
       
      <div className="rightbod">
        <div className="signup bolder">Sign Up</div>
        <div className="free bolder">It's free and always will be</div>
        
        <div className="formbox">
        <input type="text" className="inputbody in1" placeholder="First name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" className="inputbody in1 fr" placeholder="Last name" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="formbox">
        <input type="text" class="inputbody in2" placeholder="Email or mobile number" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="formbox">
        <input type="text" class="inputbody in2" placeholder="Re-enter email or mobile number" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="formbox">
        <input type="text" class="inputbody in2" placeholder="New password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        
        
            <div className="formbox">
              <div className="agree">
                By clicking Sign Up, you agree to our 
                <div className="link">Terms</div> and that you have read our 
                <div class="link">Data Use Policy</div>, including our <div class="link">Cookie Use</div>.
              </div>  
            </div>
            <div class="formbox">
              <button type="submit" className="signbut bolder" onClick={onRegister}>Sign Up</button>
            </div>
          <div class="formbox">
            <div class="create"><div class="link h">Create a Page</div> for a celebrity, band or business.</div>
          </div>
      </div>
     </div>
    </div>
  
  
    )
    
    async function onRegister() {
		try {
			await firebase.register(name, email, password)
		   } catch(error) {
			alert(error.message)
		}
	}
}
	

export default withRouter(Register)