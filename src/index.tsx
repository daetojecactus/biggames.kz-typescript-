import React from 'react';
import ReactDOM from 'react-dom/client';
import "./normalize.css";
import "./styles.scss";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
