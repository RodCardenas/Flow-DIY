var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var _currentUser;
var _authErrors = [];

var UserStore = new Store(AppDispatcher);

UserStore.currentUser = function(){
  return _currentUser;
};

UserStore.authErrors = function(){
  return _authErrors;
};

var resetCurrentUser = function(user){
  _currentUser = user;
  _authErrors = null;
};

var resetAuthErrors = function(errors){
  _authErrors = errors;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CURRENT_USER :
      resetCurrentUser(payload.user);
      UserStore.__emitChange();
      break;

    case UserConstants.USER_LOGOUT:
      resetCurrentUser(null);
      UserStore.__emitChange();
      break;

    case UserConstants.USER_LOGIN:
      resetCurrentUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
