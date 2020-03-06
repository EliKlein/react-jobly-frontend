import React, { useState, useContext } from 'react';
import TokenContext from './TokenContext';
import JoblyApi from './JoblyApi';


function useLoginSignupForm(apiFuncName, initialFormDataState) {

  const [error, setError] = useState(false);
  const [formData, setFormData] = useState(initialFormDataState);
  const { saveToken } = useContext(TokenContext);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let token = await JoblyApi[apiFuncName](formData);
      saveToken(token);
    } catch (err) {
      setError(err);
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }));
  }

  const errorDiv = error ? <div className="alert alert-danger">{error}</div> : null;

  return { handleSubmit, handleChange, formData, errorDiv };
}

export { useLoginSignupForm };