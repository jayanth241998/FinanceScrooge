import { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'


function App() {
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
  }
  const displaySignUp = () => {
    setShowSignup(true);
  }

  return (
    
      <Router>  
        <Routes>
          <Route  path="/" >
            {loggedIn? (<Navigate to="/home"></Navigate>):
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
              )}
          </Route>
          <Route path="/home">

          </Route>
      </Routes>    
      </Router>  
      
  );
}

export default App;
