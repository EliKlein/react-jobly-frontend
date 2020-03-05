import React, { useState, useEffect } from 'react';
import JoblyApi from './helpers/JoblyApi';
import Search from './Search';
import CompanyCard from './CompanyCard';
import './Companies.css'

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  async function searchCompanies(search) {
    let companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
  }

  return (
    <div className="Companies container">
      <Search search={searchCompanies} />
      {companies.map(company =>
      <CompanyCard key={company.handle} company={company} />
      )}
    </div>
  );
}


export default Companies;