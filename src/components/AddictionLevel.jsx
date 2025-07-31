import React from 'react';
import down from './down.png' 

function AddictionLevel() {
  return (
    <div className="card">
      <h3>Addiction Level</h3>
      <p>You spent 4h 32m, 2 hours less than yesterday</p>
      <img src={down} alt='img' className='down'/>
    </div>
  );
}

export default AddictionLevel;
