const React = require('react');
const About = require('About');
const Weather = require('Weather');
const Examples = require('Examples');
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
const Nav = () => {
  return(
    <ul>
      <li><Link to="/">Get Weather</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/examples">Example</Link></li>
    </ul>
  );
}

module.exports = Nav;