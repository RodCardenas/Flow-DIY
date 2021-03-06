var React = require('react');
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../util/user_api_util');

var UserLoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return ({email: "", password: "" , authErrors: ""});
  },

  componentDidMount: function(){
    this.listenerToken = UserStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    var user = UserStore.currentUser();
    if(typeof user !== 'undefined'){
      this.setState({authErrors:"", email: user.email});
      this.context.router.push("/myFlow/" + this.state.email);
    } else{
      this.setState({authErrors:UserStore.authErrors()});
    }
  },

  login: function(e){
    e.preventDefault();

    UserApiUtil.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
  },

  loginGuest: function(e){
    e.preventDefault();

    var email = "guest@flow-diy.com".split("");
    var password = "flow-diy".split("");
    var time = 50;

    var self = this;

    this.setState({
      username: '',
      password: ''
    });

    email.forEach(function (char){
      time += 50;

      document.getElementById("email").focus();
      setTimeout(function () {
        self.setState({email: self.state.email + char});
      }, time);
    });

    time += 500;

    password.forEach(function (char){
      time += 50;

      setTimeout(function (){
        document.getElementById("password").focus();
        self.setState({password: self.state.password + char});
      }, time);
    });

    time += 650;

    setTimeout(function(){
      UserApiUtil.loginUser({
        email: "guest@flow-diy.com",
        password: "flow-diy",
      });
      self.context.router.push("/myFlow/guest@flow-diy.com");
    }, time);

  },

  signUp: function(e){
    e.preventDefault();

    UserApiUtil.createUser({
      email: this.state.email,
      password: this.state.password,
    });
    // this.context.router.push("/myFlow/" + this.state.email);
  },

  emailInputChange: function(event) {
    this.setState({email: event.target.value});
  },

  passwordInputChange: function(event) {
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

    if(typeof this.state.currentUser === 'undefined'){
      return (
        <div id="login-form-and-errors-container">

          {this.getErrors()}

          <form id="login-form">

            <label>
              <div className="label-text">Email</div>
              <input
                type="text"
                id="email"
                onChange={this.emailInputChange}
                value={this.state.email} />
            </label>

            <label>
              <div className="label-text">Password</div>
              <input
                type="password"
                id="password"
                onChange={this.passwordInputChange}
                value={this.state.password} />
            </label>

            <div className="buttons">
              <button onClick={this.login}>Login</button>
              <button onClick={this.signUp}>SignUp</button>
              <button onClick={this.loginGuest}>demo</button>
            </div>

          </form>

        </div>
      );
    }
  }
});

module.exports = UserLoginForm;
