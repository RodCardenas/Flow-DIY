var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var StepUtil = require('../util/step_api_util');
var PictureUtil = require('../util/picture_api_util');

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

  accessPictures: function(pictures, stepId){
    if(typeof pictures !== 'undefined' && pictures.length > 0){
      var picturesHTML = pictures.map(function(picture){
        return (
          <div className="editable-step-picture" key={"step" + stepId + "-" + picture.id}>
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

  addPicture: function(event){
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
            imageable_id: self.state.id,
            imageable_type: "Api::Step",
            picture_url: picture.url
          });
        });
      }
    );
  },

  render: function(){
    var pictures = this.accessPictures(this.props.step.pictures, this.state.id);

    return (
      <div className="editable-step-detail">
        <h3 className="editable-step-title">
          <div className="editable-step-order">Step {this.state.order}:</div> <input type="text" value={this.state.title} onChange={this.onTitleChange} />
        </h3>
        <input type="textbox" className="editable-step-body" value={this.state.body} onChange={this.onBodyChange} />
        <div className="editable-step-pictures-container">
          <ul className="editable-step-pictures">
            {pictures}
          </ul>
          <button className="add-pic" onClick={this.addPicture}>Add Picture</button>
        </div>
      </div>
    );
  }
});

module.exports = EditableStep;
