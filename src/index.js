import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Switch, Routes } from 'react-router-dom';
import MatchDetails from './components/matchPage/MatchDetails';
import HomePage from './components/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/date/:date" element={<HomePage></HomePage>}/>
          <Route path="match/:id" element={<MatchDetails></MatchDetails>}/> 
           
          </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
