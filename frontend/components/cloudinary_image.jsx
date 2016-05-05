var React = require('react');
var Cloudinary = require('cloudinary');


var CloudinaryImage = React.createClass({

  getInitialState: function(){
    return ({url: "" });
  },

  render: function(){
    var imageName = this.props.imageUrl.substr(this.props.imageUrl.lastIndexOf('/') + 1);
    var img = Cloudinary.image(imageName, this.props.format);
    var imgSrc = $(img)[0].src;
    var klass = this.props.className || "cloudinaryImg";

    return (
      <img src={imgSrc} className={klass} id={imageName} />
    );
  }
});

module.exports = CloudinaryImage;
