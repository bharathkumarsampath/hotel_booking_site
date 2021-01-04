import React from 'react'
import {GoogleLogin} from 'react-google-login'
// import { refreshTokenSetup } from '../../utils/refreshToken';
import FacebookLogin from 'react-facebook-login'
import './Login.css'

const CLIENT_ID = '119331962953-eniqlmmhnfnsi5ia49iiq238jcmvmhva.apps.googleusercontent.com'
const login = (props) => {
    const onSuccess = (res) => {
        console.log("[Login Success] current user ",res.profileObj);
        props.history.push('/home');
        // refreshTokenSetup(res);
    }

    const onFailure = (res) => {
        console.log("[Login failed] res ",res );
    }

    const responseFacebook = (response) => {
        props.history.push('/home');
      }
    return (
        <div className="LoginButtons">
                <FacebookLogin
                    appId="877262486141152"
                    autoLoad={true}
                    fields="name,email,picture"
                    cssClass="btnFacebook"
                    icon="fa-facebook"
                    textButton="Facebook"
                    callback={responseFacebook} />
            
            <div >
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                className="btnGoogle">
                            <i className="fa fa-google" style={{ marginLeft: 
                            '5px' }}/> 
                            <span>&nbsp;&nbsp;Google</span> 
                        </button>
                      )}
                >
                    
                </GoogleLogin>
            </div>
            
            
            
        </div>
    )
}

export default login;
