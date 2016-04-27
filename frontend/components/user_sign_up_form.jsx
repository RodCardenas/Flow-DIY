var React = require('react');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var UserSignUpForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({email: "", password: "" });
  },

  logout: function() {
    UserApiUtil.logoutUser(this.state.currentUser);
    this.loggedOut = true;
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
          <button onClick={this.logout}>LogOut</button>
        </div>;
    } else {
      content =
        <div>
          <div id="errors">
            {this.state.authErrors}
          </div>

          <form onSubmit={this.signUp}>
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

            <input type="submit" value="SignUp" />
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

module.exports = UserSignUpForm;
