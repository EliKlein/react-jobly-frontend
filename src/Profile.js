import React, { useState, useContext, useEffect } from 'react';
import JoblyApi from './helpers/JoblyApi';
import FormInputs from './FormInputs';
import TokenContext from './helpers/TokenContext';
// import 'SignupForm.css'

function Profile() {

  const { loggedIn } = useContext(TokenContext);

  const INITIAL_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    photo_url: "",
    password: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {
    async function getUser() {
      let user = await JoblyApi.getUser(loggedIn);
      delete user.jobs;
      setFormData(oldUser => ({...oldUser, ...user}));
    }
    getUser();
  }, [loggedIn]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    delete formData.username;
    let user = await JoblyApi.updateUser(loggedIn, formData);
      alert ("Your changes has been successfully updated");
  }

  const formInputs = [
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
    {
      name: "photo_url",
      value: formData.photo_url,
      label: "Photo URL"
    },
    {
      name: "password",
      value: formData.password,
      type: "password",
      label: "Re-enter Password"
    }
  ];

  return (
    <div>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormInputs handleChange={handleChange} inputs={formInputs} />
        <button className="btn btn-secondary">Save Changes</button>
      </form>
    </div>
  )
}


export default Profile;