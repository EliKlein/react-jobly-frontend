import React from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';

function Companies({token}) {
  console.log("tokennnnnnnn", token);
  if (!token) {
    return (
      <Redirect to="/login" />
    )
  }

  let companies = JoblyApi.getCompanies();

  return (
    <p>Check your console</p>
    
  )
}


export default Companies;