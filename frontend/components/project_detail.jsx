var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var ProjectStore = require('../stores/project_store');
var ProjectUtil = require('../util/project_api_util');

var ProjectDetail = React.createClass({

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
            <CloudinaryImage
              key={picture.id}
              imageUrl={picture.picture_url}
              format={{height: 300, width: 300, crop: "fit"}}
            />
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
        console.log(step);
        return (
          <li className="step" key={step.id}>
            {step.title}
            {step.body}
          </li>
        );
      });
    } else {
      stepsHTML = null;
    }
    return stepsHTML;
  },

  render: function(){
    var project = this.state.project;
    var pictures = this.accessPicture(project.pictures);
    var steps = this.accessSteps(project.steps);

    return (
      <div className="project-detail">
        <span className="project-title">
          {project.title}
        </span>
        <ul className="pictures-container">
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
