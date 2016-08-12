var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var StepUtil = require('../util/step_api_util');

var EditableStep = React.createClass({

  getInitialState: function(){
    var step = this.props.step;
    return ({id:step.id, title:step.title, body:step.body, order:step.order, pictures: step.pictures, project_id:step.project_id});
  },

  onTitleChange: function(event){
    event.preventDefault();
    var step = this.state;
    step.title = event.target.value;
    StepUtil.updateStep(this.state.project_id, this.state.id, this.state);
    this.setState({title: event.target.value});
  },

  onBodyChange: function(event){
    event.preventDefault();
    var step = this.state;
    step.body =  event.target.value;
    StepUtil.updateStep(this.state.project_id, this.state.id, this.state);
    this.setState({body: event.target.value});
  },

  accessPicture: function(pictures, stepId){
    if(typeof pictures !== 'undefined' && pictures.length > 0){
      var picturesHTML = pictures.map(function(picture){
        return (
          <div className="step-picture" key={"step" + stepId + "-" + picture.id}>
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

  render: function(){
    var pictures = this.accessPicture(this.state.pictures, this.state.id);

    return (
      <div className="step-detail">
        <h3 className="step-title">
          <div className="step-order">Step {this.state.order}:</div> <input type="text" value={this.state.title} onChange={this.onTitleChange} />
        </h3>
        <ul className="step-pictures-container">
          {pictures}
        </ul>
        <input type="textbox" className="step-body" value={this.state.body} onChange={this.onBodyChange} />
      </div>
    );
  }
});

module.exports = EditableStep;
