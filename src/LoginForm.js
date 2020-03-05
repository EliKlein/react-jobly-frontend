import React, { useState, useContext } from 'react';
import JoblyApi from './helpers/JoblyApi'
import FormInputs from './FormInputs';
import TokenContext from './helpers/TokenContext'
// import 'LoginForm.css'

function LoginForm() {

  const INITIAL_STATE = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const {saveToken} = useContext(TokenContext);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let token = await JoblyApi.logIn(formData);
    saveToken(token);
  }

  const formInputs = [
    {
      name: "username",
      value: formData.username
    },
    {
      name: "password",
      value: formData.password
    }
  ];

  return (
    <form onSubmit={handleSubmit}>
      <FormInputs handleChange={handleChange} inputs={formInputs}/>
      <button>Submit</button>
    </form>
  )
}


export default LoginForm;