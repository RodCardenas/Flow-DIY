var React = require('react');
var ReactDOM = require('react-dom');

var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var ProjectStore = require('../stores/project_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var ProjectCreatorV2 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({ projectName: "" });
  },

  componentDidMount: function(){
    this.projectStoreListener = ProjectStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.projectStoreListener.remove();
  },

  projectNameChange: function(event) {
    this.setState({projectName: event.target.value});
  },

  createProject: function(event) {
    event.preventDefault();

    ProjectUtil.createProject({
      title: this.state.projectName,
      author_id: this.state.currentUser.id
    });
  },

  onChange: function(){
    var project = ProjectStore.findProjectByAuthorAndTitle(this.state.currentUser.id, this.state.projectName);
    this.context.router.push("/projects/" + project.id);
  },

  render: function(){
    return (
      <div className="project-creator">
        <form id="project-form">
          <label>
            <div className="label-text"><h1>Project Name</h1></div>
            <br/>
            <input
              type="text"
              id="project-name"
              onChange={this.projectNameChange}
              value={this.state.projectName} />
          </label>
          <br/>
          <button onClick={this.createProject}>Create Project</button>
        </form>
      </div>
    );
  }

});

module.exports = ProjectCreatorV2;
