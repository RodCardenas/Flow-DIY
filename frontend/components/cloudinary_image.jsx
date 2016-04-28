var React = require('react');
var UserLoginForm = require ('./user_login_form');
var UserSignUpForm = require('./user_sign_up_form');
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
      <div className="cloudinaryImg" >
          <img src={imgSrc}/>
      </div>
    );
  }
});

module.exports = CloudinaryImage;
