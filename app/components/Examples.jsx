const React = require('react');
import {Link} from 'react-router-dom';
const Examples = (props) => {
  return(
    <div className="examples text-center">
      <h3>Examples component</h3>
      <ol>
        <li><Link to="/?q=Dhaka,BD">Dhaka</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;