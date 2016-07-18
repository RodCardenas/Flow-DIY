var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var FavoriteStore = require('../stores/favorite_store');
var UserStore = require('../stores/user_store');
var FavoriteUtil = require('../util/favorite_api_util');
var Modal = require('react-modal');
var UserLoginForm = require ('./user_login_form');


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

var Favorite = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return { currentUser: UserStore.currentUser(),favorite: null, modalIsOpen: false };
  },

  componentDidMount: function(){
    FavoriteUtil.fetchFavorites(this.props.project.id);
    this.listenerFavoriteStore = FavoriteStore.addListener(this.onChange);
    this.listenerToken = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.listenerFavoriteStore.remove();
    this.listenerToken.remove();
  },

  updateUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  onChange: function(){
    if(typeof this.state.currentUser !== 'undefined'){
      this.setState({ favorite:FavoriteStore.findFavoriteByAuthorIdAndProjectId(this.state.currentUser.id, this.props.project.id)});
    }
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  addFavorite: function(e){
    e.preventDefault();

    FavoriteUtil.createFavorite(this.state.currentUser.id, this.props.project.id);
  },

  removeFavorite: function(e){
    e.preventDefault();
    alert("remove favorite");
  },

  render: function(){

    // if(typeof this.state.currentUser === 'undefined'){
    //   return(
    //     <div className="favorite-container">
    //       <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545951/notFavorite.jpg" onClick={this.openModal}/>
    //     </div>
    //   );
    // }

    if(this.state.favorite !== null){
      return (
        <div className="favorite-container">
          <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545966/favorite.jpg"
          onClick={this.removeFavorite}/>
      </div>
      );
    } else {
      return (
        <div className="favorite-container">
          <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545951/notFavorite.jpg" onClick={this.addFavorite}/>
      </div>
      );
    }
  }
  // if(typeof this.state.currentUser === 'undefined'){
  //   return(
  //     // <div>
  //     //   <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545951/notFavorite.jpg" onClick={this.openModal}/>
  //     //
  //     //   <div id="user-interations">
  //     //     <Modal id="modal"
  //     //       isOpen={this.state.modalIsOpen}
  //     //       onRequestClose={this.closeModal}
  //     //       style={customStyles}>
  //     //       <UserLoginForm id="login-signup" />
  //     //     </Modal>
  //     //   </div>
  //     // </div>
  //   );
  // }
});

module.exports = Favorite;
