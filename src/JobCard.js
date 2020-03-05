import React from 'react';
import './JobCard.css';

function JobCard({ job }) {

  return (
    <div className="JobCard card">
      <h4 className="JobCard-title">
        {job.title}
        <button className="JobCard-btn btn btn-primary">This doesn't do anything right now</button>
      </h4>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}


export default JobCard

