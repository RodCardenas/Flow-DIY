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

  render: function(){
    var user = this.state.currentUser;
    var content;

    if(user){
      this.loggedOut = false;
      content =
        <div>
          Welcome back, {user.email}
          <button onClick={this.logout}>Logout</button>
        </div>;
    } else {
      content =
        <div>
          <div id="errors">
            {this.state.authErrors}
          </div>

          <form>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={this.uChange}
              value={this.state.email} />

            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.pChange}
              value={this.state.password} />

            <button onClick={this.login}>Login</button>
            <button onClick={this.signUp}>SignUp</button>
          </form>
        </div>;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = UserLoginForm;
