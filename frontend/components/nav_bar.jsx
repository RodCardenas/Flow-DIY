var React = require('react');
var UserLoginForm = require ('./user_login_form');
var UserSignUpForm = require('./user_sign_up_form');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({loginForm: false, signUpForm: false });
  },

  login: function(){
    this.setState({loginForm: true, signUpForm: false});
  },

  signup: function(){
    this.setState({loginForm: false, signUpForm: true});
  },

  showButtons: function(){
    return (
      <div>
        <button onClick={this.login}>login</button>
        /
        <button onClick={this.signup}>signup</button>
      </div>
    );
  },

  render: function(){
    var content;
    var lForm = this.refs.UserLoginForm;
    var sForm = this.refs.UserSignUpForm;

    if(typeof this.state.currentUser === 'undefined'){
      content = this.showButtons();
    }

    if(this.state.loginForm)
    {
      content = (
                  <div>
                    <UserLoginForm ref="UserLoginForm"/>
                  </div>
      );

      if(typeof lForm !== 'undefined'){
        if(lForm.loggedOut){
          content = this.showButtons();
        }
      }
    } else if (this.state.signUpForm){
        content = (
                    <div>
                      <UserSignUpForm ref="UserSignUpForm"/>
                    </div>
        );

        if(typeof sForm !== 'undefined'){
          if(sForm.loggedOut){
            content = this.showButtons();
          }
        }
    }

    return (
      <div className="NavBar">
        {content}
      </div>
    );
  }
});

module.exports = NavBar;
