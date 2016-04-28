var React = require('react');
var UserLoginForm = require ('./user_login_form');
var CloudinaryImage = require('./cloudinary_image');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var UserApiUtil = require('../util/user_api_util');

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({loginForm: false });
  },

  login: function(){
    this.setState({loginForm: true});
  },

  logout: function() {
    UserApiUtil.logoutUser(this.state.currentUser);
  },

  showButtons: function(){
    return (
      <div id="user-interations">
        <button id="login-signup" onClick={this.login}>login/signup</button>
      </div>
    );
  },

  render: function(){
    var content;
    var lForm = this.refs.UserLoginForm;

    if(typeof this.state.currentUser === 'undefined'){
      content = this.showButtons();
    } else {
      content =
        <div id="nav-form-container">
          Welcome back, {this.state.currentUser.email}
          <button onClick={this.logout}>Logout</button>
        </div>;
    }

    if(this.state.loginForm)
    {
      content = (
                  <div id="nav-form-container">
                    <UserLoginForm ref="UserLoginForm"/>
                  </div>
      );

      if(typeof lForm !== 'undefined'){
          if(lForm.loggedOut){
          content = this.showButtons();
        }
      }
    }

    return (
      <div className="NavBar">
        <a id="logo" href="/">
          <CloudinaryImage
            imageName="logo.png"
            format={{height: 100, crop: "scale"}} />
        </a>

        {content}
      </div>
    );
  }
});

module.exports = NavBar;
