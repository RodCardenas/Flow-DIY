var React = require('react');
var ReactDOM = require('react-dom');

var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var StepUtil = require('../util/step_api_util');
var StepIndex = require('./step_index');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var ProjectStore = require('../stores/project_store');

var ProjectEditor = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    var targetProject = ProjectStore.find(this.props.params.projectId);
    return ({
      projectTitle: targetProject.title,
      project: targetProject,
      errors:ProjectStore.getErrors() });
  },

  updateProject: function(e) {
    e.preventDefault();

    console.log(this.props.params.projectId);

    ProjectUtil.updateProject(this.props.params.projectId,{
      title: this.state.projectTitle,
      author_id: this.state.currentUser.id
    });

    // this.updateSteps();

    this.context.router.push("/projects/" + this.props.params.projectId);
  },

  projectTitleChange: function(event) {
    this.setState({projectTitle: event.target.value});
  },

  updateSteps: function(e){
    e.preventDefault();

    var steps = this.refs.stepIndex.parseSteps();
    var keys = Object.keys(steps);

    var project = this.state.project;

    keys.forEach(function(key){
      var step = steps[key];
      step["project_id"] = project.id;
      StepUtil.updateStep(project.id, step);
    });

    this.context.router.push("/projects/" + this.state.project.id);
    window.location.reload();
  },

  getErrors: function() {
    if (Object.keys(this.state.errors).length !== 0){
      return(
        <div id="errors">
          {this.state.errors}
        </div>
      );
    } else {
      return (
        <div id="errors">
        </div>
      );
    }
  },

  render: function(){
    if (typeof this.state.currentUser === 'undefined'){
      var content = <div className="no-user">Please login/signup to use this feature :)</div>;
    } else {
        content = (
          <div className="project-editor">
            <form id="project-form">
                <label>
                  <div className="label-text">Project</div>
                  <input
                    type="text"
                    id="project-title"
                    onChange={this.projectTitleChange}
                    value={this.state.projectTitle} />
                </label>

                <div className="step-index-container">
                  Steps
                  <StepIndex projectId={this.state.project.id} ref="stepIndex"/>
                </div>

                <button onClick={this.updateProject}>Update Project</button>
            </form>
          </div>
        );
      }

    return (
      <div className="project-editor-container">
        {this.getErrors()}
        {content}
      </div>
    );
  }
});

module.exports = ProjectEditor;
