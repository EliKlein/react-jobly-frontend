import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './Login.css'

function Login({setToken}) {

  const logInForm = <LoginForm setToken={setToken}/>
  const signupForm = <SignupForm />

  const [form, setForm] = useState(logInForm);

  const showLogin = () => setForm(logInForm);
  const showSignUp = () => setForm(signupForm);

  return (
    <div>
      <div className="login-btns">
        <button onClick={showLogin}>Login</button>
        <button onClick={showSignUp}>Sign Up</button>
      </div>
      <div className="Login-container container">
        {form}
      </div>
    </div>
  )

}

export default Login