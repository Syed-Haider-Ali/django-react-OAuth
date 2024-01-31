import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <div>
    <LoginSocialFacebook
    appId='your-app-id'
    onResolve={(response)=>{
      console.log(response)
    }}
    onReject={(error)=>{
      console.log(error)
    }}
    >
      
    <FacebookLoginButton/>
    </LoginSocialFacebook>


    <LoginSocialGoogle
    client_id='your-client-id'
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
