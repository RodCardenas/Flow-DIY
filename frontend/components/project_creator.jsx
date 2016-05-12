var React = require('react');
var ReactDOM = require('react-dom');

var CloudinaryImage = require('./cloudinary_image');
var ProjectUtil = require('../util/project_api_util');
var StepUtil = require('../util/step_api_util');
var StepIndex = require('./step_index');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var ProjectStore = require('../stores/project_store');

var ProjectCreator = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({
      projectTitle: "",
      projectName: "",
      project: null,
      steps:[],
      errors:ProjectStore.getErrors(),
      pictures: [],
      picturesUrls: []
     });
  },

  componentDidMount: function(){
    ProjectUtil.fetchProjects();
    this.projectStoreListener = ProjectStore.addListener(this.findProject);
  },

  componentWillUnmount: function(){
    this.projectStoreListener.remove();
  },

  findProject: function(){
    if(this.state.currentUser !== 'undefined'){
      this.setState({
         project: ProjectStore.findProjectByAuthorAndTitle(
           this.state.currentUser.id,
           this.state.projectName
         ),
         errors: ProjectStore.getErrors()
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

    //TODO add call to update project with picture elements added to form

    this.context.router.push("/projects/" + this.state.project.id);
    window.location.reload();
  },

  projectNameChange: function(event) {
    this.setState({projectName: event.target.value});
  },

  addPicture: function(e){
    e.preventDefault();
    var self = this;

    window.cloudinary.openUploadWidget({
      cloud_name: 'flow-diy',
      upload_preset: 'flchasab',
      theme: 'minimal'},
      self.showPictures
    );
  },

  showPictures: function(error, result){
    if(error !== null){
      this.setState({error: error });
      return;
    }

    var pictureCnt = this.state.pictures.length;
    var modPictures = this.state.pictures.slice(0);
    var modURLs = this.state.picture_urls.slice(0);

    result.forEach(function(picture){
      modURLs.push(picture.url);
      modPictures.push(
        <CloudinaryImage
          key={picture.public_id}
          imageUrl={picture.url}
          format={{height: 100, width: 100, crop: "fit"}} />
      );
    });

    this.setState({pictures: modPictures, picture_urls: modURLs});
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
    if (this.state.projectName === "" || this.state.errors.length !== 0){
        var content = (
          <div className="project-creator">
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
          <div className="project-creator">
            <form id="project-form">
                <label>
                  <div className="label-text">Project</div>
                  <input
                    type="text"
                    id="project-name"
                    onChange={this.projectNameChange}
                    value={this.state.projectName} />
                </label>

                <div className="project-pictures">
                  {this.state.pictures}
                </div>

                <br/ >
                <button onClick={this.addPicture}>Add Picture</button>

                <div className="step-index-container">
                  <hr/>
                  <h2>
                    Steps
                  </h2>
                  <StepIndex
                    steps={[]}
                    projectId={this.state.project.id}
                    ref="stepIndex"/>
                </div>

                <button onClick={this.updateProject}>Update & View Project</button>
            </form>
          </div>
        );
    }

    if (typeof this.state.currentUser === 'undefined'){
      content = <div className="no-user">Please login/signup to use this feature :)</div>;
    }

    return (
      <div className="project-creator-container">
        {this.getErrors()}
        {content}
      </div>
    );
  }
});

module.exports = ProjectCreator;
