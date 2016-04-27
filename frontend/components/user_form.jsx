var React = require('react');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var UserForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({email: "", password: "", errors: [] });
  },

  componentDidMount: function(){
    this.listenerToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  _onChange: function(){
    this.setState({ errors: UserStore.authErrors() });
  },

  logout: function() {
    // var currentUser = UserStore.currentUser();
    UserApiUtil.logoutUser(this.state.currentUser);
  },

  login: function() {
    UserApiUtil.loginUser({
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
      content =
        <div>
          Welcome back, {user.email}
          <button onClick={this.logout}>LogOut</button>
        </div>;
    } else {
      content =
        <div>
          <div id="errors">
            {this.state.errors}
          </div>

          <form onSubmit={this.login}>
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

            <input type="submit" value="Login" />
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

module.exports = UserForm;
