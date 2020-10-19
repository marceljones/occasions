import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Occasion } from './components/Occasion';
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Occasion />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

