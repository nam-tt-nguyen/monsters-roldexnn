import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //import from App.js
import reportWebVitals from './reportWebVitals';

// ReactDom library calls render to render our App function in the form of HTML
// document.getElementById('root'): looking on the document object for some elements with 
// an id of root & it replaces it with that HTML from our "App" function
ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
