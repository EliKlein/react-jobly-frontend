import React from 'react';
import JoblyApi from './helpers/JoblyApi'
import FormInputs from './FormInputs';
import { useLoginSignupForm } from './helpers/hooks';


function LoginForm() {

  const INITIAL_STATE = {
    username: "",
    password: ""
  }
  let { formData, handleChange, handleSubmit, errorDiv } = useLoginSignupForm("logIn", INITIAL_STATE);

  const formInputs = [
    {
      name: "username",
      value: formData.username,
    },
    {
      name: "password",
      value: formData.password,
      type: "password"
    }
  ];
  return (
    <form onSubmit={handleSubmit}>
      {errorDiv}
      <FormInputs className="text-left" handleChange={handleChange} inputs={formInputs} />
      <button className="btn btn-secondary">Submit</button>
    </form>
  )
}


export default LoginForm;