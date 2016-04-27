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
        // TODO Issues with server
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
        // TODO Issues with server or invalid credentials?
      }
    });
  },

  logoutUser: function(){
    // TODO if someone is logged in
    $.ajax({
      method: 'DELETE',
      url: 'api/session',

      success: function(currentUser){
        UserActions.loggedOutUser(currentUser);
      },
      error: function(error){
        // TODO Issues with server
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
        // TODO Issues with server
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
        // TODO Issues with server or invalid credentials?
      }
    });
  },

};
