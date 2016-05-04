var React = require('react');
var Carousel = require('./carousel');
var ProjectIndex = require('./project_index');

var Landing = React.createClass({

  render: function(){
    return (
      <div className="landing">
        <Carousel />
        <ProjectIndex />
      </div>

    );
  }
});

module.exports = Landing;
