import React, { useState, useContext, useEffect } from 'react';
import JoblyApi from './helpers/JoblyApi';
import FormInputs from './FormInputs';
import TokenContext from './helpers/TokenContext';
import './Profile.css'

function Profile() {

  const { loggedIn } = useContext(TokenContext);
  const [error, setError] = useState(false);

  const INITIAL_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    photo_url: "",
    password: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        let userRes = await JoblyApi.getUser(loggedIn);
        delete userRes.jobs;
        delete userRes.username;
        setFormData(oldUser => ({ ...oldUser, ...userRes }));
      } catch (err) {
        setError(err);
      }
    }
    getUser();
  }, [loggedIn]);

  const handleChange = (evt) => {
    let { name, value } = evt.target;
    if (name === "photo_url" && value === "") value = null;
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    for (let key in formData) {
      let val = formData[key];
      if (val === null) {
        delete formData[key];
      }
    }
    try {
      let userRes = await JoblyApi.updateUser(loggedIn, formData);
      delete userRes.username;
      setFormData(oldUser => ({
        ...oldUser,
        ...userRes,
        password: ""
      }));
      setAlertShown(true);
    } catch (err) {
      setError(err);
    }
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
    <div className="container">
      {error ? <div className="alert alert-danger">{error}</div> : null}
      {
        alertShown ?
          <div className="Profile-alert alert alert-success container" role="alert">You've successfully updated your profile!</div>
          :
          null
      }
      <div className="Profile-container">
        <h3 className="Profile-header">Profile</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="Profile-username form-group">
            <label>Username: {loggedIn}</label>
          </div>
          <FormInputs handleChange={handleChange} inputs={formInputs} />
          <button className="btn btn-secondary">Save Changes</button>
        </form>
      </div>
    </div>
  )
}


export default Profile;