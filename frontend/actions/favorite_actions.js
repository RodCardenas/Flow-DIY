var AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  receiveFavorite: function(favorite){
    AppDispatcher.dispatch({
      actionType: "FAVORITE_RECEIVED",
      favorite: favorite
    });
  },

  receiveFavorites: function(favorites){
    AppDispatcher.dispatch({
      actionType: "FAVORITES_RECEIVED",
      favorites: favorites
    });
  },

  deleteFavorite: function(favorite){
    AppDispatcher.dispatch({
      actionType: "FAVORITE_DELETED",
      favorite: favorite
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: "FAVORITE_ERROR",
      errors: error.responseJSON.errors
    });
  }

};
