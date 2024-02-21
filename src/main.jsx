import { BrowserRouter as Router } from "react-router-dom";

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
)