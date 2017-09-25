const React = require('react');
var ErrorModal = React.createClass({
  render: function(){
    return(
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <h3>No city found</h3>
      </div>
    );
  }

});
module.exports= ErrorModal;