var React = require('react');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var UserLoginForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return ({email: "", password: "" });
  },

  logout: function() {
    UserApiUtil.logoutUser(this.state.currentUser);
    this.loggedOut = true;
  },

  login: function(e) {
    e.preventDefault();
    var self = this;

    this.setState({
      username: '',
      password: ''
    });
    UserApiUtil.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
  },

  loginGuest: function(e) {
    e.preventDefault();

    var username = "guest@flow-diy.com".split("");
    var password = "flow-diy".split("");
    var time = 50;

    username.forEach(function (letter) {
      time += 50;

      document.getElementById("email").focus();
      setTimeout(function () {
        self.setState({email: self.state.email + letter});
      }, time);
    });

    time += 500;

    password.forEach(function (letter) {
      time += 50;

      setTimeout(function () {
        document.getElementById("password").focus();
        self.setState({password: self.state.password + letter});
      }, time);
    });

    time += 650;

    setTimeout(function(){
      UserApiUtil.loginUser({
        email: "guest@flow-diy.com",
        password: "flow-diy",
      });
      this.context.router.push("/");
    }, time);

  },

  signUp: function(e) {
    e.preventDefault();

    UserApiUtil.createUser({
      email: this.state.email,
      password: this.state.password,
    });
    this.context.router.push("/");
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
      content =
        <div id="logout-form-container">
          Welcome back, {user.email}
          <button onClick={this.logout}>Logout</button>
        </div>;
    } else {
      content =
        <div id="login-form-and-errors-container">
          {this.getErrors()}
          <form id="login-form">
            <label>
              <div className="label-text">Email</div>
              <input
                type="text"
                id="email"
                onChange={this.uChange}
                value={this.state.email} />
            </label>

            <label>
              <div className="label-text">Password</div>
              <input
                type="password"
                id="password"
                onChange={this.pChange}
                value={this.state.password} />
            </label>

            <div className="buttons">
              <button onClick={this.login}>Login</button>
              <button onClick={this.signUp}>SignUp</button>
              <button onClick={this.loginGuest}>demo</button>
            </div>
          </form>
        </div>;
    }

    return (
        content
    );
  }
});

module.exports = UserLoginForm;
