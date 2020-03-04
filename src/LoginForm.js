import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi'
import FormInputs from './FormInputs';
// import 'LoginForm.css'

function LoginForm({ setToken }) {

  const INITIAL_STATE = {
    username: "",
    password: ""
  }
  const history = useHistory();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let token = await JoblyApi.logIn(formData);
    setToken(token);
    history.push("/companies");
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