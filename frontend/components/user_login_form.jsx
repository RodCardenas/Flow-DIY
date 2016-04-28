var React = require('react');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var UserLoginForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({email: "", password: "" });
  },

  logout: function() {
    UserApiUtil.logoutUser(this.state.currentUser);
    this.loggedOut = true;
  },

  login: function(e) {
    e.preventDefault();

    UserApiUtil.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
  },

  loginGuest: function(e) {
    e.preventDefault();

    document.getElementById("email").value = "guest@flow-diy.com";
    document.getElementById("password").value = "password";

    UserApiUtil.loginUser({
      email: "guest@flow-diy.com",
      password: "password",
    });
  },

  signUp: function(e) {
    e.preventDefault();

    UserApiUtil.createUser({
      email: this.state.email,
      password: this.state.password,
    });
  },

  uChange: function(event) {
    this.setState({email: event.target.value});
  },

  pChange: function(event) {
    this.setState({password: event.target.value});
  },

  getErrors: function() {
    if (this.state.authErrors){
      return(
        <div id="errors">
          {this.state.authErrors}
        </div>
      );
    } else {
      return (
        <div id="errors">
        </div>
      );
    }
  },

  render: function(){
    var user = this.state.currentUser;
    var content;

    if(user){
      this.loggedOut = false;
      // TODO push into url root/ refresh page
      content =
        <div id="logout-form-container">
          Welcome back, {user.email}
          <button onClick={this.logout}>Logout</button>
        </div>;
    } else {
      content =
        <div id="login-form-and-errors-container">
          <form id="login-form">
            <label>
              <input
                type="text"
                id="email"
                onChange={this.uChange}
                value={this.state.email} />
              <div className="label-text">Email</div>
            </label>

            <label>
              <input
                type="password"
                id="password"
                onChange={this.pChange}
                value={this.state.password} />
              <div className="label-text">Password</div>
            </label>

            <div className="buttons">
              <button onClick={this.login}>Login</button>
              <button onClick={this.signUp}>SignUp</button>
              <button onClick={this.loginGuest}>demo</button>
            </div>
          </form>
          {this.getErrors()}
        </div>;
    }

    return (
        content
    );
  }
});

module.exports = UserLoginForm;
