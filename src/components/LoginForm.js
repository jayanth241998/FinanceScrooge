import { useState } from "react";

function LoginForm({handleLogIn,displaySignUp,userName}) {

    const processLoginData = (e) => {
        e.preventDefault();
        const loginData = new FormData(e.target);
        handleLogIn(loginData);
    };
    const showSignUp = (e) => {
        displaySignUp(true);
    }

    return (
        <div className="login">
                      <form id="login-form" className="login" onSubmit={processLoginData} >
                      <input type='email'  placeholder='email' name='email' required />
                      <input type='password' placeholder='password' name='password' required />
                      <div className='login-buttons'>
                      <button type="submit" >Login</button>
                      <button onClick={showSignUp}>Signup</button>
                      </div>
                      </form>
                      <p className='message-section'>Welcome {userName}!</p>
        </div>
    )
}

export default LoginForm