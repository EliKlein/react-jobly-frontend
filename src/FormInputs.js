import React from 'react';

function FormInputs({ handleChange, inputs }) {
  // DO NOT CHANGE NUMBER OF INPUTS!!!!
  return inputs.map(({ name, value, type = 'text', label }, i) => {
    if (label === undefined) {
      label = name[0].toUpperCase() + name.slice(1);
    }
    if(value === null || value === undefined){
      value = "";
    }
    return (
      <div key={i} className="form-group">
        <label htmlFor={name}>{label}</label>
        <input className="form-control" onChange={handleChange} id={name} name={name} value={value} type={type} />
      </div>
    );
  });
}

export default FormInputs;