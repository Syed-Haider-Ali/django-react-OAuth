import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { useState } from 'react';


const App = () => {

  const [profile, setProfile] = useState(null)

  return (
    <div>
      {!profile ?

      <div>
          <LoginSocialFacebook
          appId='your-app-id'
          onResolve={(response)=>{
            setProfile(response.data)
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
            setProfile(response.data)
            console.log(response)
          }}
          onReject={(error)=>{
            console.log(error)
          }}
          >
          <GoogleLoginButton/>
          </LoginSocialGoogle>  
      </div>: ""}

      {profile ? 
          <div> 
            <h1>{profile.name}</h1>
            <img src={profile.picture} alt={profile.name}/>
          </div>  : "" }
    
    </div>
  );
}

export default App;
