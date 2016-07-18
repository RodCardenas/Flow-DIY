var FavoriteActions = require ('../actions/favorite_actions');

module.exports =  {
  createFavorite: function(userId, projectId){
    $.ajax({
      method: 'POST',
      url: '/api/favorites',
      data: {favorite: {author_id: userId, project_id: projectId}},
      success: function(favorite){
        FavoriteActions.receiveFavorite(favorite);
      },
      error: function(error){
        FavoriteActions.handleError(error);
      }
    });
  },

  fetchFavorites: function(projectId){
    $.ajax({
      method: 'GET',
      url: '/api/favorites',
      data: {favorite: {project_id: projectId}},
      success: function(favorites){
        FavoriteActions.receiveFavorites(favorites);
      },
      error: function(error){
        FavoriteActions.handleError(error);
      }
    });
  }
};
