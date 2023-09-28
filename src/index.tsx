import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App';

declare global {
  interface Window {spContext:AnalyserNode;wpProperties:AnalyserNode;_spPageContextInfo:any}
}

const root = ReactDOM.createRoot(
    document.getElementById(document.currentScript?.getAttribute('wpContainer') || "") as HTMLElement
    );
root.render(
  <div>
    
    <App wpContext={window.spContext}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
