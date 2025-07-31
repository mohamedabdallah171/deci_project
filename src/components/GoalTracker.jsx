import React from 'react';
import goal from './download.png'

function GoalTracker() {
  return (
    <div className="card">
      <h3>Goal Tracker</h3>
      <img src= {goal} alt='image' className='goal' />

        <p>Max 1 hour per day</p>
      </div>
  );
}

export default GoalTracker;
