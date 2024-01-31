import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <div>
    {/* <LoginSocialFacebook
    appId='1449556775653189'
    onResolve={(response)=>{
      console.log(response)
    }}
    onReject={(error)=>{
      console.log(error)
    }}
    >
      
    <FacebookLoginButton/>
    </LoginSocialFacebook> */}


    <LoginSocialGoogle
    client_id='40197534599-tcm80dtbb8stoe8426khvj8gdd251ktk.apps.googleusercontent.com'
    redirect_uri='https://accounts.google.com/o/oauth2/v2/auth'
    onResolve={(response)=>{
      console.log(response)
    }}
    onReject={(error)=>{
      console.log(error)
    }}
    >


    <GoogleLoginButton/>
    </LoginSocialGoogle>

    </div>
  );
}

export default App;
