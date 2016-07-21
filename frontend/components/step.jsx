var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var Step = React.createClass({

  getInitialState: function(){
    return ({step: this.props.step});
  },

  accessPicture: function(pictures, step){
    if(typeof pictures !== 'undefined' && pictures.length > 0){
      var picturesHTML = pictures.map(function(picture){
        return (
          <div className="step-picture" key={"step" + step.id + "-" + picture.id}>
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
    var step = this.state.step;
    var pictures = this.accessPicture(step.pictures, step);

    return (
      <div className="step-detail">
        <h3 className="step-title">
          Step {step.order}: {step.title}
        </h3>
        <ul className="step-pictures-container">
          {pictures}
        </ul>
        <p className="step-title">
          {step.body}
        </p>
      </div>
    );
  }
});

module.exports = Step;
