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

  removeFavorite: function(favorite){
    $.ajax({
      method: 'DELETE',
      url: '/api/favorites/' + favorite.id,
      data: {favorite: favorite},
      success: function(fav){
        FavoriteActions.deleteFavorite(fav);
      },
      error: function(error){
        FavoriteActions.handleError(error);
      }
    });
  },

  fetchFavorites: function(authorId, projectId){
    $.ajax({
      method: 'GET',
      url: '/api/favorites',
      data: {favorite: {project_id: projectId, author_id: authorId}},
      success: function(favorites){
        FavoriteActions.receiveFavorites(favorites);
      },
      error: function(error){
        FavoriteActions.handleError(error);
      }
    });
  }
};
