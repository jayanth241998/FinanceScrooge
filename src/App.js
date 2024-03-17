import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import AccountHome from './Pages/AccountHome';


function App() {
  return (
    
      <Router>  
        <Routes>
          <Route  path="/" element={<Home></Home>} >
            
          </Route>
          <Route path="/home" element={<AccountHome></AccountHome>}>

          </Route>
      </Routes>    
      </Router>  
      
  );
}

export default App;
