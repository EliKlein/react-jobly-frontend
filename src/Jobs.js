import React, { useState, useEffect, useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
import Search from './Search';
import JobCard from './JobCard';
import './Jobs.css';
import TokenContext from './helpers/TokenContext';

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [appliedTo, setAppliedTo] = useState({});
  const [error, setError] = useState(false);
  const { loggedIn } = useContext(TokenContext);

  useEffect(() => {
    async function getJobs() {
      try {
        let jobsReq = JoblyApi.getJobs();
        let userReq = JoblyApi.getUser(loggedIn);
        let [jobsRes, userRes] = await Promise.all([
          jobsReq,
          userReq
        ]);

        let newAppliedTo = {}
        for (let job of userRes.jobs) {
          newAppliedTo[job.id] = true;
        }

        setJobs(jobsRes);
        setAppliedTo(newAppliedTo);
      } catch (err) {
        setError(err);
      }
    }
    getJobs();
  }, [loggedIn]);

  async function searchJobs(search) {
    let jobsRes = await JoblyApi.getJobs(search);
    setJobs(jobsRes);
  }

  async function applyToJob(id) {
    try {
      await JoblyApi.applyToJob(id);
      setAppliedTo(oldAppliedTo => ({ ...oldAppliedTo, [id]: true }));
    } catch (err) {
      setAppliedTo(oldAppliedTo => ({ ...oldAppliedTo, [id]: err }));
    }
  }


  return (
    <div className="Jobs container">
      <Search search={searchJobs} />
      {error ? <div className="alert alert-danger">{error}</div> : null}
      {jobs.map(job =>
        <JobCard key={job.id} job={job} applied={appliedTo[job.id]} applyToJob={applyToJob} />
      )}
    </div>
  )
}


export default Jobs;