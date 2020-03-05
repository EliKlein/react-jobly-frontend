import React, { useState, useContext } from 'react';
import JoblyApi from './helpers/JoblyApi'
import FormInputs from './FormInputs';
import TokenContext from './helpers/TokenContext'


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
      <FormInputs className="text-left" handleChange={handleChange} inputs={formInputs}/>
      <button className="btn btn-secondary">Submit</button>
    </form>
  )
}


export default LoginForm;