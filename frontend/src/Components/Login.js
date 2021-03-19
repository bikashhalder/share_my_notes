import React ,{ Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from './Googleservices';

class GoogleSocialAuth extends Component {
    render() {
       const responseGoogle = async(response) => {
           let googleResponse = await googleLogin(response.accessToken)
       }
       return (
           <div className = "App">
               <h1> Login with google </h1>
               <GoogleLogin 
                  clientId = "545244156751-16abf4slf1lj91bctnh2d7fln14lj2m5.apps.googleusercontent.com"
                  buttonText = "LOGIN WITH GOOGLE"
                  onFailure={responseGoogle}
                  onSuccess={responseGoogle}
                  />
           </div>
       );
    }
}

export default GoogleSocialAuth;