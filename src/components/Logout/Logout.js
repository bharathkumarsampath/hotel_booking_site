import React from 'react'
import {GoogleLogout} from 'react-google-login'

const CLIENT_ID = '119331962953-eniqlmmhnfnsi5ia49iiq238jcmvmhva.apps.googleusercontent.com'
const logout = (props) => {
    const onSuccess = (res) => {
        console.log("Logout made successfully" );
        props.history.push('/login');
    }

    const onFailure = (res) => {
        console.log("[Logout failed] res ",res );
    }

    return (
        <div>
            <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                onFailure={onFailure}
            />
            
        </div>
    )
}

export default logout;
