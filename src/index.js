import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strictMode ломает работу useEffect в todoList хз почему
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);