var React = require('react');

var ProjectIndex = React.createClass({

  getInitialState: function(){
    return ({projects: [] });
  },

  render: function(){

    return (
      <div>
        Project Index
      </div>
    );
  }
});

module.exports = ProjectIndex;
