var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var ProjectStore = require('../stores/project_store');
var ProjectUtil = require('../util/project_api_util');
var StepIndex = require('./step_index');

var ProjectEditor = React.createClass({
  getInitialState: function(){
    return ({projectName: ""});
  },

  projectNameChange: function(event) {
    this.setState({projectName: event.target.value});
  },

  createProject: function(e) {
    e.preventDefault();

    ProjectUtil.createProject({
      title: this.state.projectName,
      author_id: this.props.params.userId
    });
  },

  render: function(){
    return (
      <div className="project-editor">
        Project Editor
        <form id="project-form">

            <label>
              <div className="label-text">Project</div>
              <input
                type="text"
                id="project-name"
                onChange={this.projectNameChange}
                value={this.state.projectName} />
            </label>

            <StepIndex />

            <input type="submit" onClick={this.createProject} />
        </form>
      </div>
    );
  }
});

module.exports = ProjectEditor;
