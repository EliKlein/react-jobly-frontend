import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

function CompanyCard ({company}) {
  
  return (
    <Link className="CompanyCard card" to={`/companies/${company.handle}`}>
      <h3 className="CompanyCard-name">{company.name}</h3>
      <img src={company.logo_url} alt={`${company.name}-logo`}/>
      <p>{company.description}</p>
    </Link>
  )
}


export default CompanyCard

