import { useState } from 'react';
import {BrowserRouter as Navigate} from 'react-router-dom'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

function Home() {

    const [showSignup,setShowSignup] = useState(false);
    const [loggedIn,setLoggedIn] = useState(false);
    const [userName,setUserName] = useState("");
    const handleSignUp = (formdata) => {
      setUserName(formdata.get("username"));
      setShowSignup(false);
    }
    const handleLogIn = (logInData) => {
      setUserName(logInData.get("email"));
      console.log("hey");
      setLoggedIn(true);
    }
    const displaySignUp = () => {
      setShowSignup(true);
    }

    return(
        loggedIn ?  (<Navigate to="/home"></Navigate>):
              (
              <div className="App">
                <header className="App-header">
                  <h1>Welcome to Scrooge Finance</h1>
                </header>
                <div className="App-body">
                    {showSignup ? (<SignUpForm handleSignUp={handleSignUp}/>) : (
                      <LoginForm handleLogIn={handleLogIn} displaySignUp={displaySignUp} userName={userName} ></LoginForm>
                    )}
                </div>
              </div>
        )
    );

}

export default Home;