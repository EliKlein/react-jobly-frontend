import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
import JobCard from './JobCard';

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

  return (
    company
      ?
      <div className="container">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        {company.jobs.map(job =>
          <JobCard key={job.id} job={job} />
        )}
      </div>
      :
      (
        error
          ?
          <p>{error}</p>
          :
          <p>Loading...</p>
      )

  )
}

export default Company;