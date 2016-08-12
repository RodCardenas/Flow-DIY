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
    backgroundColor   : 'rgba(102, 102, 102, 0.9)',
    minWidth          : "100vw",
    minHeight          : "100vh",
  },

  content : {
    position          : 'relative',
    width             : '400px',
    height            : '180px',
    top               : '30vh',
    left              : '37vw',
    backgroundColor   : 'rgba(246, 246, 246, 0.75)',
    padding           : '1vh 1vw 1vh 1vw'
  },
};

var Favorite = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return { currentUser: UserStore.currentUser(), favorite: null, modalOpen: false};
  },

  componentDidMount: function(){
    FavoriteUtil.fetchFavorites(null,this.props.project.id);
    this.listenerFavoriteStore = FavoriteStore.addListener(this.onChange);
    this.listenerUserStore = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.listenerFavoriteStore.remove();
    this.listenerUserStore.remove();
  },

  updateUser: function(){
    if (typeof UserStore.currentUser() !== "undefined") {
      this.setState({currentUser: UserStore.currentUser()});
    }
  },

  onChange: function(){
    if (typeof this.state.currentUser !== "undefined") {
      this.setState({ favorite: FavoriteStore.findFavoriteByAuthorIdAndProjectId(this.state.currentUser.id, this.props.project.id)});
    }
  },

  addFavorite: function(event){
    event.preventDefault();

    FavoriteUtil.createFavorite(this.state.currentUser.id, this.props.project.id);
  },

  removeFavorite: function(event){
    event.preventDefault();

    FavoriteUtil.removeFavorite(this.state.favorite);
  },

  openModal: function() {
    this.setState({modalOpen: true});
  },

  closeModal: function() {
    this.setState({modalOpen: false});
  },

  render: function(){

    if(typeof UserStore.currentUser() === 'undefined'){
      return (
        <div className="favorite-container">
          <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545951/notFavorite.jpg" onClick={this.openModal}/>
            <Modal className="modal"
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={customStyles}>

              <UserLoginForm id="login-signup" />
            </Modal>
        </div>
      );
    } else{
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
  }
});

module.exports = Favorite;
