var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var StepIndex = require('./step_index');

var ProjectEditor = React.createClass({

  getInitialState: function(){
    return ({projectName: ""});
  },

  createProject: function(e) {
    e.preventDefault();
    var steps = this.refs.stepIndex.parseSteps();

    console.log(steps);

    // ProjectUtil.createProject({
    //   title: this.state.projectName,
    //   author_id: 1,
    //   steps: this.parseSteps
    // });
  },

  projectNameChange: function(event) {
    this.setState({projectName: event.target.value});
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

            <div>
              Project Steps
              <StepIndex ref="stepIndex"/>
            </div>

            <input type="submit" onClick={this.createProject} />
        </form>
      </div>
    );
  }
});

module.exports = ProjectEditor;
