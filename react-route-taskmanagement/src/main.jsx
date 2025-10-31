import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router';
//import App from './App';
import './index.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)