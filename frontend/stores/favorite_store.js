var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FavoriteConstants = require('../constants/favorite_constants');
var SearchStore = require('./search_store');
var ProjectStore = require('./project_store');

var _favorites = {};
var _errors = [];
var FavoriteStore = new Store(AppDispatcher);

FavoriteStore.all = function () {
  return Object.assign({}, _favorites);
};

FavoriteStore.allForUser = function (authorId) {
  var keys = Object.keys(_favorites);
  var favorites = {};
  keys.forEach(function(favoriteId){
    if(_favorites[favoriteId].author_id === authorId){
      favorites[favoriteId] =  _favorites[favoriteId];
    }
  });

  return favorites;
};

FavoriteStore.find = function(id){
  return Object.assign({}, _favorites[id]);
};

FavoriteStore.findFavoriteByAuthorIdAndProjectId = function(authorId, projectId){
  var keys = Object.keys(_favorites);
  var theFavoriteBeingLookedFor = null;

  keys.forEach(function(key){
    var favorite = _favorites[key];

    if(favorite.author_id === authorId && favorite.project_id === projectId){
      theFavoriteBeingLookedFor =  favorite;
    }
  });

  return theFavoriteBeingLookedFor;
};

FavoriteStore.searchFavorites = function(){
  var search = SearchStore.getSearch();
  var projects = ProjectStore.all();

  var keys = Object.keys(_favorites);
  var favorites = {};

  keys.forEach(function(favoriteId){
    var projectTitle = projects[_favorites[favoriteId].project_id - 1].title.toLowerCase();
    if(projectTitle.indexOf(search.toLowerCase()) !== -1){
      favorites[favoriteId] =  _favorites[favoriteId];
    }
  });
  return favorites;
};

FavoriteStore.getErrors = function(){
  return _errors.slice(0);
};

var addFavorite = function(favorite){
  _favorites[favorite.id] = favorite;
};

var removeFavorite = function(favorite){
  delete _favorites[favorite.id];
};

var addFavorites = function(favorites){
  if(favorites === null){
    return;
  }

  var keys = Object.keys(favorites);

  keys.forEach(function(key){
    var favorite = favorites[key];
    _favorites[favorite.id] = favorite;
  });
};

var resetErrors = function(errors){
  _errors = errors;
};


FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FavoriteConstants.FAVORITE_RECEIVED :
      addFavorite(payload.favorite);
      FavoriteStore.__emitChange();
      break;

    case FavoriteConstants.FAVORITES_RECEIVED :
      addFavorites(payload.favorites);
      FavoriteStore.__emitChange();
      break;

    case FavoriteConstants.FAVORITE_DELETED :
      removeFavorite(payload.favorite);
      FavoriteStore.__emitChange();
      break;

    case FavoriteConstants.FAVORITE_ERROR:
      resetErrors(payload.errors);
      FavoriteStore.__emitChange();
      break;
  }
};

module.exports = FavoriteStore;
