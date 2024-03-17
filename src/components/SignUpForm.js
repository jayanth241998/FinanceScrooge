import React from 'react'

function SignUpForm({handleSignUp}){

    const handlesubmit = (e) => {
        e.preventDefault();
        const signUpData = new FormData(e.target);
        handleSignUp(signUpData);
    }
    return(
        <form id="signup-form" className="login" onSubmit={handlesubmit} >
            <input type='text'  placeholder='username' name='username' required />
            <input type='email'  placeholder='email' name='email' required />
            <input type='password' placeholder='password' name='password' required />
            <div className='login-buttons'>
            <button type='submit' >Submit</button>
            </div>
        </form>
    );

}

export default SignUpForm;