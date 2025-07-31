import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddictionLevel from './components/AddictionLevel';
import UsageLevel from './components/UsageLevel';
import GoalTracker from './components/GoalTracker';
import MindfulActivities from './components/MindfulActivities';
import SubscriptionCard from './components/Subscription';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-header">
                <h2>Break The scroll. Take time back</h2>
                <p>Track and reflect on your social media addiction</p>
              </div>

              <div className="grid-container">
                <AddictionLevel />
                <UsageLevel />
                <GoalTracker />
                <MindfulActivities />
              </div>
            </>
          }
        />

        <Route path="/subscription" element={<SubscriptionCard />} />
      </Routes>
    </Router>
  );
}

export default App;
