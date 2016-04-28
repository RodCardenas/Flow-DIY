var UserActions = require ('../actions/user_actions');

module.exports =  {
  fetchCurrentUser: function(){
    $.ajax({
      method: 'GET',
      url: '/api/session',
      success: function(currentUser){
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function(error){
        UserActions.handleError(error);
      }
    });
  },

  loginUser: function(credentials){
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {user: credentials},
      success: function(currentUser){
        UserActions.loggedInUser(currentUser);
      },
      error: function(error){
        UserActions.handleError(error);
      }
    });
  },

  logoutUser: function(){
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: function(currentUser){
        UserActions.loggedOutUser(currentUser);
      },
      error: function(error){
        UserActions.handleError(error);
      }
    });
  },

  createUser: function(credentials){
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: {user: credentials},
      success: function(user){
        UserActions.createdUser(user);
      },
      error: function(error){
        UserActions.handleError(error);
      }
    });
  },

  deleteUser: function(id){
    $.ajax({
      method: 'DELETE',
      url: 'api/user/' + id,
      success: function(currentUser){
        UserActions.deletedUser(currentUser);
      },
      error: function(error){
        UserActions.handleError(error);
      }
    });
  },

};
