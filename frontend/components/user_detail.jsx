var React = require('react');
var CloudinaryImage = require('./cloudinary_image');
var UserStore = require('../stores/user_store');
var UserUtil = require('../util/user_api_util');
var ProjectIndexFavorites = require('./project_index_favorites');

//TODO: Add Change picture functionality

var UserDetail = React.createClass({
  getInitialState: function(){
    return ({user: UserStore.currentUser()});
  },

  componentDidMount: function(){
    UserUtil.fetchCurrentUser();
    this.listenerToken = UserStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    this.setState({ user:UserStore.currentUser()});
  },

  render: function(){
    var user = this.state.user;

    if (typeof user === 'undefined'){
      return (
        <div className="user-detail">
          <h2 className="user-detail-email">
            {this.props.params.userEmail}
          </h2>
        </div>
      );
    } else {
      return (
        <div className="user-detail-container">
          <div className="user-detail">
            <h2 className="user-detail-email">
              {user.email}
            </h2>
              <CloudinaryImage
                className="user-detail-image"
                imageUrl={user.picture.picture_url}
                format={{height: 250, crop: "scale"}} />
          </div>
          <ProjectIndexFavorites
            />
        </div>
      );
    }
  }
  // email={user.email}
});

module.exports = UserDetail;
