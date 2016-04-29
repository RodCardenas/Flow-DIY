var React = require('react');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var Cloudinary = require('cloudinary');


var CloudinaryImage = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({url: "" });
  },

  render: function(){
    var imageName = this.props.imageUrl.substr(this.props.imageUrl.lastIndexOf('/') + 1);
    var img = Cloudinary.image(imageName, this.props.format);
    var imgSrc = $(img)[0].src;

    return (
      <div className="cloudinaryImg" id={imageName} >
          <img src={imgSrc}/>
      </div>
    );
  }
});

module.exports = CloudinaryImage;
