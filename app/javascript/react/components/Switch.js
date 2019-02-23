import React from 'react';

const Switch = props => {
  return (
    
    <div className="switch">
      <input className="switch-input" id="defaultSwitch" type="checkbox" name="defaultSwitch" />
      <label className="switch-paddle" htmlFor="defaultSwitch">
        <span className="show-for-sr">Default Switch</span>
      </label>
    </div>

  )}

export default Switch
