import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function Login({setLog}) {

  const logInForm = <LoginForm setLog={setLog}/>
  const signupForm = <SignupForm />

  const [form, setForm] = useState(logInForm);

  const showLogin = () => setForm(logInForm);
  const showSignUp = () => setForm(signupForm);

  return (
    <div>
      <button onClick={showLogin}>Login</button>
      <button onClick={showSignUp}>Sign Up</button>
      {form}
    </div>
  )

}

export default Login