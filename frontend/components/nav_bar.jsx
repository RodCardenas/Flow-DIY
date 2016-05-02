var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var UserLoginForm = require ('./user_login_form');
var CloudinaryImage = require('./cloudinary_image');
var Search = require('./search');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var UserApiUtil = require('../util/user_api_util');

/*eslint prefer-const: "error"*/
/*eslint-env es6*/
const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(102, 102, 102, 0.85)',
    minWidth          : 700
  },

  content : {
    width             : '40%',
    height            : '30%',
    top               : '40%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
    backgroundColor   : 'rgba(246, 246, 246, 0.75)'
  },
};

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  showButtons: function(){
    return (
      <div id="user-interations">
        <button onClick={this.openModal}>login/signup</button>
        <Modal id="modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>

          <UserLoginForm id="login-signup" />
        </Modal>
      </div>
    );
  },

  logout: function() {
    UserApiUtil.logoutUser(this.state.currentUser);
    this.setState( {modalIsOpen: false});
  },

  render: function(){
    var content;

    if(typeof this.state.currentUser === 'undefined'){
      content = this.showButtons();
    } else {
      content =
        <div id="nav-form-container">
          Welcome back, {this.state.currentUser.email}
          <button onClick={this.logout}>Logout</button>
        </div>;
    }

    return (
      <div className="NavBar">
        <a id="logo" href="/">
          <CloudinaryImage
            imageUrl="http://res.cloudinary.com/flow-diy/image/upload/v1461796717/logo.png"
            format={{height: 100, crop: "scale"}} />
        </a>

        <Search />

        {content}

      </div>
    );
  }
});

module.exports = NavBar;
