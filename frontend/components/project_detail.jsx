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
    return ({project: {}});
  },

  componentDidMount: function(){
    ProjectUtil.fetchProject(this.props.params.projectId);
    this.listenerToken = ProjectStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    var proj = ProjectStore.find(this.props.params.projectId);
    if(proj !== this.state.project){
      this.setState({ project: proj });
    }
  },

  accessPicture: function(pictures){
    if(typeof pictures !== 'undefined'){
      var picturesHTML = pictures.map(function(picture){
        return (
          <div className="project-picture" key={"project" + picture.id}>
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
      var sorted = false;

      while(sorted === false){
        sorted = true;
        var i = 0;
        var stepHolder = null;
        while(i < steps.length - 1){
          if(steps[i].order > steps[i + 1].order){
            stepHolder = steps[i];
            steps[i] = steps[i + 1];
            steps[i + 1] = stepHolder;
            sorted = false;
          }
          i++;
        }
      }

      var stepsHTML = steps.map(function(step){
        return (
          <Step className="step" key={"step" + step.id} step={step}/>
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

  updateProject: function(){
    this.context.router.push("/edit/" + this.state.project.id);
  },

  render: function(){
    var project = this.state.project;
    var pictures = this.accessPicture(project.pictures);
    var steps = this.accessSteps(project.steps);

    if(Object.keys(project).length !== 0){
      if(typeof this.state.currentUser !== 'undefined')
      if(this.state.currentUser.id === project.author.id){
        var projectOptions = (
          <div id="project-options">
            <button onClick={this.deleteProject}>Delete Project</button>
            <button onClick={this.updateProject}>Update Project</button>
          </div>
        );
      }
    }

    return (
      <div className="project-detail" key={project.id}>
        <div className="project-information">
          <h2 className="project-detail-title">
            {project.title}
          </h2>
          {projectOptions}
          <ul className="project-pictures-container">
            {pictures}
          </ul>
        </div>
        <ul className="steps-container">
          {steps}
        </ul>
        <div className="space-taker" />
      </div>
    );
  }
});

module.exports = ProjectDetail;
