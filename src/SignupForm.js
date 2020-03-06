import React from 'react';
import JoblyApi from './helpers/JoblyApi';
import FormInputs from './FormInputs';
import { useLoginSignupForm } from './helpers/hooks';
// import 'SignupForm.css'

function SignupForm() {

  const INITIAL_STATE = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  }
  //                                                                        THE KEYWORD THIS SUCKS
  let { formData, handleChange, handleSubmit, errorDiv } = useLoginSignupForm("signUp", INITIAL_STATE);

  const formInputs = [
    {
      name: "username",
      value: formData.username
    },
    {
      name: "password",
      value: formData.password,
      type: "password"
    },
    {
      name: "first_name",
      value: formData.first_name,
      label: "First Name"
    },
    {
      name: "last_name",
      value: formData.last_name,
      label: "Last Name"
    },
    {
      name: "email",
      value: formData.email,
      type: "email",
      label: "E-mail"
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {errorDiv}
      <FormInputs handleChange={handleChange} inputs={formInputs} />
      <button className="btn btn-secondary">Submit</button>
    </form>
  )
}


export default SignupForm;