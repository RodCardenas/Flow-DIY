var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var StepIndexItem = React.createClass({
  getInitialState: function(){
    return ({title: "", body: "", order: this.props.order});
  },

  titleChange: function(event) {
    this.setState({title: event.target.value});
  },

  bodyChange: function(event) {
    this.setState({body: event.target.value});
  },

  parseStep: function(){
    return this.state;
  },

  render: function(){
    return (
      <div className="step-index-item">
        Step {this.state.order}
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

module.exports = StepIndexItem;
