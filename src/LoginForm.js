import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi'
// import 'LoginForm.css'

function LoginForm({setLog}) {

  const INITIAL_STATE = {
      username: "",
      password: ""
  }
  const history = useHistory();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData(oldFormData => ({...oldFormData, [name]: value}));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let token = await JoblyApi.logIn(formData);
    setLog(token);
    history.push("/companies");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input onChange={handleChange} id="username" name="username" value={formData.username} />
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} id="password" name="password" value={formData.password}/>
      <button>Submit</button>
    </form>
  )
}


export default LoginForm;