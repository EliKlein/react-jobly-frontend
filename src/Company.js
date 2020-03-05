import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
import JobCard from './JobCard';
import './Company.css';

function Company() {
  const { name } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCompany() {
      try {
        let companyRes = await JoblyApi.getCompany(name);
        setCompany(companyRes);
      } catch (err) {
        setError(err);
      }
    }
    getCompany();
  }, [name]);


  if (company) {
    return (
      <div className="Company container">
        <h3 className="Company-header">{company.name}</h3>
        <p className="Company-desc">{company.description}</p>
        {company.jobs.map(job =>
          <JobCard key={job.id} job={job} />
        )}
      </div>
    )
  } else if (error) {
    return (
      <p>{error}</p>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }

}

export default Company;