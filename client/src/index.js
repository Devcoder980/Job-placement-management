import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JobContext from './component/JobContext';
import jobData from './jobData.js'; // Import the user data

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobContext.Provider value={jobData} >
      <App/>
    </JobContext.Provider>
  </React.StrictMode>
);


reportWebVitals();
