import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';
import defaultImage from './default.png';

function CompanyCard ({company}) {
  const URL = company.logo_url || defaultImage;

  return (
    <Link className="CompanyCard card" to={`/companies/${company.handle}`}>
      <h3 className="CompanyCard-name">{company.name}<img className="CompanyCard-image" src={URL} alt={`${company.name}-logo`}/></h3>
      <p className="CompanyCard-description">{company.description}</p>
    </Link>
  );
}


export default CompanyCard;

