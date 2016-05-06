var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var StepUtil = require('../util/step_api_util');
var StepIndex = require('./step_index');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var ProjectStore = require('../stores/project_store');
var StepStore = require('../stores/step_store');

/*eslint prefer-const: "error"*/
/*eslint-env es6*/
const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(102, 102, 102, 0.85)',
    minWidth          : 700
  },

  content : {
    width             : '40%',
    height            : '30%',
    top               : '40%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
    backgroundColor   : 'rgba(246, 246, 246, 0.75)'
  },
};

var ProjectEditor = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({projectTitle: "", projectName: "", project: null, modalIsOpen: false, steps:[]});
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  showCreateProjectModal: function(){
    return (
      <Modal id="project-modal"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}>

        <label>
          <div className="label-text">My project is called:</div>
          <input
            type="text"
            id="project-name"
            onChange={this.projectNameChange}
            value={this.state.projectName} />
        </label>

        <div className="buttons">
          <button onClick={this.createProject}>Fill in Details!</button>
        </div>
      </Modal>
    );
  },

  componentDidMount: function(){
    ProjectUtil.fetchProjects();
    this.projectStoreListener = ProjectStore.addListener(this.findProject);
    this.stepStoreListener = ProjectStore.addListener(this.findSteps);
  },

  componentWillUnmount: function(){
    this.projectStoreListener.remove();
    this.stepStoreListener.remove();
  },

  findProject: function(){
    if(this.state.currentUser !== 'undefined'){
      this.setState({
         project: ProjectStore.findProjectByAuthorAndTitle(
           this.state.currentUser.id,
           this.state.projectName
         )
      });
    }
  },

  findSteps: function(){
    if(this.state.projects !== null){
      this.setState({
        steps: StepStore.findStepsByProjectId(this.state.project.id)
      });
    }
  },

  createProject: function(e) {
    e.preventDefault();

    ProjectUtil.createProject({
      title: this.state.projectTitle,
      author_id: this.state.currentUser.id
    });

    this.setState({projectName: this.state.projectTitle});
  },

  projectTitleChange: function(event) {
    this.setState({projectTitle: event.target.value});
  },

  updateProject: function(e){
    e.preventDefault();

    var steps = this.refs.stepIndex.parseSteps();
    console.log(steps);
    var keys = Object.keys(steps);

    var project = ProjectStore.findProjectByAuthorAndTitle(
      this.state.currentUser.id,
      this.state.projectName
    );

    keys.forEach(function(key){
      var step = steps[key];
      step["project_id"] = project.id;
      StepUtil.createStep(project.id, step);
    });

    var createdSteps = this.state.steps;
    console.log(createdSteps);

    //steps need to be created when the add button is pressed so that step id is present when pictures are being created

    createdSteps.forEach(function(key){
      var step = steps[key];

      step.pictures.forEach(function(pictureUrl){
        this.createPicture({
          imageable_type: "Api::Step",
          imageable_id: step.id,
          picture_url: pictureUrl
        });
      });
    });

    this.context.router.push("/projects/" + this.state.project.id);
  },

  createPicture: function(details){
    $.ajax({
      method: 'POST',
      url: '/api/pictures/',
      data: {picture: details}
    });
  },

  projectNameChange: function(event) {
    this.setState({projectName: event.target.value});
  },

  getErrors: function() {
    if (this.state.authErrors){
      return(
        <div id="errors">
          {this.state.authErrors}
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
    if (this.state.projectName === ""){
        var content = (
          <div className="project-editor">

            <label>
              <div className="label-text">My project is called:</div>
              <input
                type="text"
                id="project-title"
                onChange={this.projectTitleChange}
                value={this.state.projectTitle} />
            </label>

            <div className="buttons">
              <button onClick={this.createProject}>Create Project Flow!</button>
            </div>
          </div>
        );
    } else {
        content = (
          <div className="project-editor">
            <form id="project-form">
                <label>
                  <div className="label-text">Project</div>
                  <input
                    type="text"
                    id="project-name"
                    onChange={this.projectNameChange}
                    value={this.state.projectName} />
                </label>

                <div className="step-index-container">
                  Steps
                  <StepIndex ref="stepIndex"/>
                </div>

                <button onClick={this.updateProject}>Update Project</button>
            </form>
          </div>
        );
    }

    if (typeof this.state.currentUser === 'undefined'){
      content = <div className="no-user">Please login/signup to use this feature :)</div>;
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
