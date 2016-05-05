var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var StepIndex = require('./step_index');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var ProjectStore = require('../stores/project_store');

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
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({projectTitle: "", projectName: "", projectId: null, modalIsOpen: false});
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
      title: this.state.projectTitle,
      author_id: this.state.currentUser.id
    });

    this.setState({projectName: this.state.projectTitle});
  },

  projectTitleChange: function(event) {
    this.setState({projectTitle: event.target.value});
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
              <button onClick={this.createProject}>Fill in Details!</button>
            </div>
          </div>
        );
    } else {
        content = (
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

                <button onClick={this.updateProject}>Update Project</button>
            </form>
          </div>
        );
    }

    console.log(this.state);
    return (
      <div className="project-editor-container">
        {this.getErrors()}
        {content}
      </div>
    );
  }
});

module.exports = ProjectEditor;
