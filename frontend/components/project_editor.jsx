var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var EditableStep = require('./editable_step');
var ProjectStore = require('../stores/project_store');
var StepStore = require('../stores/step_store');
var ProjectUtil = require('../util/project_api_util');
var StepUtil = require('../util/step_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var PictureUtil = require('../util/picture_api_util');

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
    this.listenerTokenSteps = StepStore.addListener(this.onStepChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
    this.listenerTokenSteps.remove();
  },

  onChange: function(){
    this.setState({ project:ProjectStore.find(this.props.params.projectId) });
  },

  onStepChange: function(){
    ProjectUtil.fetchProject(this.props.params.projectId);
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
    var self = this;
    if(typeof steps !== 'undefined' && steps.length > 0){
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
          <div className="editable-step-container" key={"stepContainer" + step.id + step.order} step={step} >
            <div className="editable-step-order-options">
              <button className="order-change" onClick={self.decreaseOrder.bind(self,step)}>△</button>
              <button className="order-change" onClick={self.increaseOrder.bind(self,step)}>▽</button>
            </div>
            <EditableStep className="editable-step" step={step} />
            <button className="delete-step"  onClick={self.removeStep.bind(self,step)}>-</button>
          </div>
        );
      });
    } else {
      stepsHTML = null;
    }
    return stepsHTML;
  },

  decreaseOrder:function(step){
    if (step.order !== 1){
      step.order--;
      StepUtil.updateStepOrder(this.state.project.id, step.id, step);
    }
  },

  increaseOrder:function(step){
    if (step.order !== this.state.project.steps.length){
      step.order++;
      StepUtil.updateStepOrder(this.state.project.id, step.id, step);
    }
  },

  viewProject: function(){
    this.context.router.push("/projects/" + this.state.project.id);
  },

  addStep: function(event){
    event.preventDefault();

    var order = this.state.project.steps.length + 1;

    StepUtil.createStep(
      this.state.project.id, {
        title: "Title goes here",
        body: "Body goes here",
        order: order
      });
  },

  removeStep: function(step){
    StepUtil.deleteStep(this.state.project.id, step.id);
  },

  addProjectPicture: function(event){
    event.preventDefault();
    var self = this;

    window.cloudinary.openUploadWidget({
      cloud_name: 'flow-diy',
      upload_preset: 'flchasab',
      theme: 'minimal'},
      function(error, result){
        if(error !== null){
          this.setState({error: error });
          return;
        }

        var pictures;

        result.forEach(function(picture){
          PictureUtil.createPicture({
            imageable_id: self.state.project.id,
            imageable_type: "Api::Project",
            picture_url: picture.url
          });
        });
      }
    );
  },

  render: function(){
    var project = this.state.project;
    var pictures = this.accessPicture(project.pictures);
    var steps = this.accessSteps(project.steps);

    if(Object.keys(project).length !== 0){
      if(this.state.currentUser.id === project.author.id){
        var projectOptions = (
          <div id="project-options">
            <button className="view-project" onClick={this.viewProject}>View Project</button>
          </div>
        );
      }
    }

    return (
      <div className="project-detail-edit-mode">
        <h2 className="edit-project-detail-title">
          {project.title}
        </h2>
        {projectOptions}
        <ul className="project-pictures-container">
          {pictures}
        </ul>
        <button className="add-project-picture-button" onClick={this.addProjectPicture}>Add Project Picture</button>
        <ul className="editable-steps-container">
          {steps}
        </ul>
        <button className="add-step" onClick={this.addStep}>Add Step</button>
        <div className="space-taker" />
      </div>
    );
  }
});

module.exports = ProjectDetail;
