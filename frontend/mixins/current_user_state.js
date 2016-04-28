var UserApiUtil = require('../util/user_api_util');
var UserStore = require('../stores/user_store');

module.exports = {
  //get the currentUser and authErrors from the UserStore and add them to this.state.
  getInitialState: function(){
    return ({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  },
  //Add a UserStore listener that will updateUser fetchCurrentUser if the UserStore.currentUser is undefined.
  componentDidMount: function(){
    this.listenerToken = UserStore.addListener(this.updateUser);
    if(typeof this.state.currentUser === 'undefined'){
      UserApiUtil.fetchCurrentUser();
    }
  },

  // update the state of currentUser and authErrors.
  updateUser: function(){
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  }
};
