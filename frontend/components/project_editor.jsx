var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var StepIndex = require('./step_index');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var ProjectStore = require('../stores/project_store');

var ProjectEditor = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({projectName: "", projectId: null});
  },

  //How to get created project's id??? Need it to create steps

  componentDidMount: function(){
    ProjectUtil.fetchProjects();
    this.listenerToken = ProjectStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    this.setState({
       projectId:ProjectStore.findNewestProjectByAuthor(this.state.currentUser.id).id });
  },

  createProject: function(e) {
    e.preventDefault();

    ProjectUtil.createProject({
      title: this.state.projectName,
      author_id: this.state.currentUser.id
    });

    //enable add step button
    //replace create project button with update project button
  },

  updateProject: function(e) {
    e.preventDefault();

    ProjectUtil.updateProject({
      title: this.state.projectName,
      author_id: this.state.currentUser.id
    });
  },

  createSteps: function(){
    var steps = this.refs.stepIndex.parseSteps();

    steps.forEach(function(step){
      //Create Step. Api Util must be defined
    });
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

            <button onClick={this.createProject}>Create Project</button>

            <div>
              Project Steps
              <StepIndex ref="stepIndex"/>
            </div>

            <button onClick={this.updateProject}>Update Project</button>
        </form>
      </div>
    );
  }
});

module.exports = ProjectEditor;
