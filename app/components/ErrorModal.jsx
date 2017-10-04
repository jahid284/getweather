const React = require('react');
var ErrorModal = React.createClass({
  componentDidMount: function(){
    $('#mySmallModal').modal('show');
  },
  render: function(){
    return(
      <div className="modal fade bd-example-modal-sm" id="mySmallModal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <h4>Found no city</h4>
          </div>
        </div>
    </div>
    );
  }

});
module.exports= ErrorModal;