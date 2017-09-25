const React = require('react');
const Examples = (props) => {
  return(
    <div className="examples">
      <h3>Examples component</h3>
      <ol>
        <li><Link to="/?q=Dhaka,BD">Dhaka</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;