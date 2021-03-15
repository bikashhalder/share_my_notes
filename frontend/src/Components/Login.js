import React ,{ Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleSocialAuth extends Component {
    render() {
        const googleResponse = (response) => {
            console.log(response);
        }
        return (
            <div className="Login">
                <h1>LOGIN WITH GOOGLE </h1>
                <GoogleLogin
                   clientId = '545244156751-16abf4slf1lj91bctnh2d7fln14lj2m5.apps.googleusercontent.com'
                   buttonText= "Login with Google"
                   onSuccess = {googleResponse}
                   onFailure = {googleResponse}
                />  
            </div>
        )
    }
}

export default GoogleSocialAuth;