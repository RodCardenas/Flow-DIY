var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

module.exports = {
  receiveCurrentUser: function(currentUser){
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER,
      user: currentUser
    });
  },

  loggedInUser: function(currentUser){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_LOGIN,
      user: currentUser
    });
  },

  loggedOutUser: function(currentUser){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_LOGOUT,
      user: currentUser
    });
  },

  createdUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_CREATED,
      user: user
    });
  },

  deletedUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_DESTROYED,
      user: user
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }

};
