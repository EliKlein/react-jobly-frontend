import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
import JobCard from './JobCard';
import './Company.css';
import TokenContext from './helpers/TokenContext';

function Company() {
  const { name } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(false);

  const [appliedTo, setAppliedTo] = useState({});
  const { loggedIn } = useContext(TokenContext);


  useEffect(() => {
    async function getCompany() {
      try {
        let companyReq = JoblyApi.getCompany(name);
        let userReq = JoblyApi.getUser(loggedIn);
        let [companyRes, userRes] = await Promise.all([
          companyReq,
          userReq
        ]);

        let newAppliedTo = {}
        for (let job of userRes.jobs) {
          newAppliedTo[job.id] = true;
        }
  
        setCompany(companyRes);
        setAppliedTo(newAppliedTo);
      } catch (err) {
        setError(err);
      }
    }
    getCompany();
  }, [loggedIn, name]);

  async function applyToJob(id) {
    try {
      await JoblyApi.applyToJob(id);
      setAppliedTo(oldAppliedTo => ({ ...oldAppliedTo, [id]: true }));
    } catch (err) {
      setAppliedTo(oldAppliedTo => ({ ...oldAppliedTo, [id]: err }));
    }
  }


  if (company) {
    return (
      <div className="Company container">
        <h3 className="Company-header">{company.name}</h3>
        <p className="Company-desc">{company.description}</p>
        {company.jobs.map(job =>
          <JobCard key={job.id} job={job} applied={appliedTo[job.id]} applyToJob={applyToJob} />
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