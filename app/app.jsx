const React = require('react');
const ReactDOM = require('react-dom');
import {HashRouter as Router,Route,Link} from 'react-router-dom';
const Main = require('Main');
const About = require('About');
const Weather = require('Weather');
const Examples = require('Examples');
ReactDOM.render(
  <Router>
    <div>
      <Main/>
      <Route exact path="/" component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </div>
  </Router>,
  document.getElementById('app')
)