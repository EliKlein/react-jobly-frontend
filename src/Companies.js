import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
import Search from './Search';
import CompanyCard from './CompanyCard';

function Companies() {

  const [companies, setCompanies] = useState([])

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);


  return (
    <div>
      {/* <Search /> */}
      {companies.map(company =>
        <CompanyCard company={company}/>
      )}
    </div>
  )
}


export default Companies;