var React = require('react');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var UserForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    var currentUser = UserStore.currentUser();
    return ({ user: currentUser, email: "", password: "" });
  },

  componentDidMount: function(){
    this.listenerToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  _onChange: function(){
    var currentUser = UserStore.currentUser();
    this.setState({ user: currentUser });
  },

  logout: function() {
    UserApiUtil.logoutUser(this.state);
  },

  login: function() {
    UserApiUtil.loginUser(this.state);
  },

  uChange: function(event) {
    this.setState({email: event.target.value});
  },

  pChange: function(event) {
    this.setState({password: event.target.value});
  },


  render: function(){
    var user = this.state.user;
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
          Test login:<br></br>
          u:q@q.com<br></br>
          p:123<br></br>
        
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
