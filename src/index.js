import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css'; // Your global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance tracking

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating root for React 18
root.render(
  <React.StrictMode>
    <App /> {/* Your main application component */}
  </React.StrictMode>
);

// Optional: If you want to measure performance in your app
reportWebVitals(); // You can pass a logging function like console.log
