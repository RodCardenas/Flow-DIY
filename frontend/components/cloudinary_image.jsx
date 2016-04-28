var React = require('react');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var Cloudinary = require('cloudinary');


var CloudinaryImage = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({url: "" });
  },

  render: function(){
    var img = Cloudinary.image(this.props.imageName, this.props.format);
    var imgSrc = $(img)[0].src;

    return (
      <div className="cloudinaryImg" id={this.props.imageName} >
          <img src={imgSrc}/>
      </div>
    );
  }
});

module.exports = CloudinaryImage;
