var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var StepEditor = React.createClass({
  getInitialState: function(){
    return ({title: "", body: ""});
  },

  titleChange: function(event) {
    this.setState({title: event.target.value});
  },

  bodyChange: function(event) {
    this.setState({body: event.target.value});
  },

  render: function(){
    return (
      <div className="step-editor">
        Step
        <label>
          <div className="label-text">Title</div>
          <input
            type="text"
            id="step-title"
            onChange={this.titleChange}
            value={this.state.title} />
        </label>
        <label>
          <div className="label-text">Body</div>
          <input
            type="text"
            id="step-body"
            onChange={this.bodyChange}
            value={this.state.body} />
        </label>
      </div>
    );
  }
});

module.exports = StepEditor;
