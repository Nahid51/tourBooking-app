import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "react-circular-progressbar/dist/styles.css";
import { DarkModeContextProvider } from './context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
