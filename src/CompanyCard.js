import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard ({company}) {
  
  return (
    <Link to={`/companies/${company.handle}`}>
      <h3>{company.name}</h3>
      <img src={company.logo_url} alt={`${company.name}-logo`}/>
      <p>{company.description}</p>
    </Link>
  )
}


export default CompanyCard

