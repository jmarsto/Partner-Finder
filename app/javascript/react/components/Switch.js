import React from 'react';

const Switch = props => {
  return (
    <div className="preference">
      <p className="small-10 columns">{props.title}</p>
      <div className="small-4 columns">
        <div className="switch">
          <input className="switch-input" id="defaultSwitch" type="checkbox" name="defaultSwitch" />
          <label className="switch-paddle" htmlFor="defaultSwitch">

          </label>
        </div>
      </div>
      <div className="small-2 columns"></div>
    </div>


  )}

export default Switch
