import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
// import App from './App';
import Navigation from './components/Navigation';

ReactDOM.render(
    <Router>
        <Navigation />
    </Router>,
    document.getElementById('root'));
