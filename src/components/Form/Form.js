import React from 'react'
import './Form.css'
const form = (props) => {
    return(
        <div className="header">
            <div className="emailInput" key={'2'}>
                <input
                    placeholder="Your Email"
                    type="text"
                    id="inputID"
                    key={'4'}
                ></input>
            </div>
            <div className="passInput" key={'3'}>
                <input
                    placeholder="Password"
                    type="text"
                    id="inputID"
                    key={'5'}
                ></input>
            </div>
            <div className="loginBtn">
                <button
                    placeholder="Login"
                >Login</button>
            </div>
            
        </div>
    )
}
export default form;