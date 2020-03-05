import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import JoblyApi from './helpers/JoblyApi';
import Search from './Search';
import JobCard from './JobCard';
import './Jobs.css';

function Jobs() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  async function searchJobs(search){
    let jobs = await JoblyApi.getJobs(search);
    setJobs(jobs);
  }


  return (
    <div className="Jobs container">
      <Search search={searchJobs}/>
      {jobs.map(job =>
      <JobCard key={job.id} job={job}/>
      )}
    </div>
  )
}


export default Jobs;