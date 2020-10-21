import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { OnOccasion } from './components/OnOccasion';
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <OnOccasion />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

