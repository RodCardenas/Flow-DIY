var React = require('react');
var UserForm = require ('./user_form');
var CurrentUserStateMixin = require('../mixins/current_user_state');

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function(){
    return ({visibleOptions: true, form: false });
  },

  login: function(){
    this.setState({form: true});
  },

  signup: function(){
    alert("sign up modal");
  },

  render: function(){
    var content;

    if (this.state.visibleOptions){
      content = (
        <div>
          <button onClick={this.login}>login</button>
          /
          <button onClick={this.signup}>signup</button>
        </div>
      );
    }

    if(this.state.form){
        content = (
        <div>
          <UserForm />
        </div>
      );
    }

    return (
      <div className="NavBar">
        {content}
      </div>
    );
  }
});

module.exports = NavBar;
