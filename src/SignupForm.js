import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
// import 'SignupForm.css'

function SignupForm() {

  const INITIAL_STATE = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
  }

  const history = useHistory();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData(oldFormData => ({...oldFormData, [name]: value}));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input onChange={handleChange} id="username" name="username" value={formData.username} />
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} id="password" name="password" value={formData.password}/>
      <label htmlFor="first_name">First Name</label>
      <input onChange={handleChange} id="first_name" name="first_name" value={formData.first_name}/>
      <label htmlFor="last_name">Last Name</label>
      <input onChange={handleChange} id="last_name" name="last_name" value={formData.last_name}/>
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} id="email" name="email" value={formData.email}/>
      <button>Submit</button>
    </form>
  )
}


export default SignupForm;