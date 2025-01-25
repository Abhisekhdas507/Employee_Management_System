import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppContextProvider from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-center"/>
    </BrowserRouter>
  </AppContextProvider>

);


reportWebVitals();