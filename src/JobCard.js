import React from 'react';
import './JobCard.css';

function JobCard({ job, applied, applyToJob }) {
  const handleClick = () => {
    setTimeout(() => applyToJob(job.id), 1000);
  }

  if (typeof applied === "object") {
    console.log(applied);
  }

  const activeButton = <button onClick={handleClick} className="JobCard-btn btn btn-primary">Apply</button> // undefined AND error -> falsy , truthy
  const inactiveButton = <button disabled className="JobCard-btn btn btn-primary">Applied</button> // true
  const alertButton = <div className="JobCard-btn btn alert-danger">The server returned an error. You may want to refresh the page.</div>

  return (
    <div className="JobCard card">
        <h4 className="JobCard-title">
          {job.title}
        </h4>
        <div>Salary: {job.salary}</div>
        <div>Equity: {job.equity}</div>
        {applied === true ? inactiveButton : null}
        {applied === undefined ? activeButton : null}
        {typeof applied === "object" ? alertButton : null}
    </div>
  )
}


export default JobCard

