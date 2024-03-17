import { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './Pages/Home';
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
          
          <Route path="/home" element={<Home></Home>}>

          </Route>
      </Routes>    
      </Router>  
      
  );
}

export default App;
