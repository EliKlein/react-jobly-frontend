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

  async function searchCompanies(search){
    let companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
  }


  return (
    <div className="container">
      <Search search={searchCompanies}/>
      {companies.map(company =>
        <CompanyCard key={company.handle} company={company}/>
      )}
    </div>
  )
}


export default Companies;