import React from 'react';
import copy from './copy.png'

function UsageLevel() {
  return (
    <div className="card">
      <h3>Usage Level</h3>
      <p>Daily Social Media Usage</p>
      <img src= {copy} alt='image' className='chart' />
        
      </div>
  );
}

export default UsageLevel;
