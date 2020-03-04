import React from 'react'

function FormInputs({ handleChange, inputs }) {
  return inputs.map(inputInfo =>
    <div className="form-group">
      <label htmlFor={inputInfo.name}>{inputInfo.name[0].toUpperCase() + inputInfo.name.slice(1)}</label>
      <input className="form-control" onChange={handleChange} id={inputInfo.name} name={inputInfo.name} value={inputInfo.value} />
    </div>
  );
}

export default FormInputs;