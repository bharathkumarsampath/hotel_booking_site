import React from 'react'
import Login from '../Login/Login'
import './LoginPage.css'
import Form from '../Form/Form'
const loginPage = (props) => {
    return (
        <div>
            <h1 className="loginText">Log In</h1>
            <div className="LoginPage">
                <Login {...props}/>
            </div>
            <p className="sideText">
                or login in with email
            </p>
            <Form/>
            <p className="forgotPassText">Forgot your password?</p>
        </div>
    )
}


export default loginPage;