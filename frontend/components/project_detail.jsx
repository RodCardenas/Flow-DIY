var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var Step = require('./step');
var ProjectStore = require('../stores/project_store');
var ProjectUtil = require('../util/project_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var ProjectDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({project: ProjectStore.find(this.props.params.projectId)});
  },

  componentDidMount: function(){
    ProjectUtil.fetchProject(this.props.params.projectId);
    this.listenerToken = ProjectStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    this.setState({ project:ProjectStore.find(this.props.params.projectId) });
  },

  accessPicture: function(pictures){
    if(typeof pictures !== 'undefined'){
      var picturesHTML = pictures.map(function(picture){
        return (
          <div className="project-picture" key={picture.id}>
            <CloudinaryImage
              imageUrl={picture.picture_url}
              format={{height: 300, width: 300, crop: "fit"}}
            />
            <h6 className="picture-caption">
              {picture.caption}
            </h6>
          </div>
        );
      });
    } else {
      picturesHTML = null;
    }
    return picturesHTML;
  },

  accessSteps: function(steps){
    if(typeof steps !== 'undefined'){
      var stepsHTML = steps.map(function(step){
        return (
          <Step className="step" key={step.id} step={step}/>
        );
      });
    } else {
      stepsHTML = null;
    }
    return stepsHTML;
  },

  deleteProject: function(){
    ProjectUtil.deleteProject(this.props.params.projectId);
    this.context.router.push("/myFlow/" + this.state.currentUser.email);
  },

  render: function(){
    var project = this.state.project;
    var pictures = this.accessPicture(project.pictures);
    var steps = this.accessSteps(project.steps);

    if(this.state.currentUser){
      var projectOptions = (
        <div id="project-options">
          <button onClick={this.deleteProject}>Delete Project</button>
          <button onClick={this.updateProject}>Update Project</button>
        </div>
      );
    }

    return (
      <div className="project-detail">
        <h2 className="project-detail-title">
          {project.title}
        </h2>
        {projectOptions}
        <ul className="project-pictures-container">
          {pictures}
        </ul>
        <ul className="steps-container">
          {steps}
        </ul>
      </div>
    );
  }
});

module.exports = ProjectDetail;
