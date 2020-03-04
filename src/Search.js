import React, { useState } from 'react';
// import JoblyApi from './helpers/JoblyApi';

function Search({ search }) {
  const [term, setTerm] = useState("");
  const handleChange = (evt) => {
    setTerm(evt.target.value);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(term);
    // setTerm("");
  }
  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="input-group flex-grow-1">
        <input className="form-control form-control-lg"
          name="search"
          placeholder="Enter search term..."
          onChange={handleChange} 
          value={term}/>
        <div className="input-group-append">
          <button className="btn btn-lg btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
}

export default Search;