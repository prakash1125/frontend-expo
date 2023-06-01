import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import Theme from "./context/ThemeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <React.StrictMode>
    <BrowserRouter>
    <Theme>
      <App />
    </Theme>
    </BrowserRouter>
  // </React.StrictMode>
  
);