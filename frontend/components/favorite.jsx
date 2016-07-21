var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var FavoriteStore = require('../stores/favorite_store');
var UserStore = require('../stores/user_store');
var FavoriteUtil = require('../util/favorite_api_util');
var Modal = require('react-modal');
var UserLoginForm = require ('./user_login_form');

var Favorite = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return { currentUser: UserStore.currentUser(), favorite: null};
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

  addFavorite: function(e){
    e.preventDefault();

    FavoriteUtil.createFavorite(this.state.currentUser.id, this.props.project.id);
  },

  removeFavorite: function(e){
    e.preventDefault();

    FavoriteUtil.removeFavorite(this.state.favorite);
  },

  render: function(){

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

});

module.exports = Favorite;
