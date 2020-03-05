import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './Login.css'

function Login() {

  const logInForm = <LoginForm />
  const signupForm = <SignupForm />

  const [form, setForm] = useState(logInForm);

  const showLogin = () => setForm(logInForm);
  const showSignUp = () => setForm(signupForm);

  return (
    <div>
      <div className="login-btns">
        <button className="btn btn-secondary" onClick={showLogin}>Login</button>
        <button className="btn btn-secondary" onClick={showSignUp}>Sign Up</button>
      </div>
      <div className="Login-container container">
        {form}
      </div>
    </div>
  )

}

export default Login