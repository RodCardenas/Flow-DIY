var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');

var _projects = {};
var _errors = {};
var _search = "";
var SearchStore = new Store(AppDispatcher);

SearchStore.all = function () {
  return Object.assign({}, _projects);
};

SearchStore.allForUser = function (userEmail) {
  var keys = Object.keys(_projects);
  var projects = {};
  keys.forEach(function(projectId){
    if(_projects[projectId].author.email === userEmail){
      projects[projectId] =  _projects[projectId];
    }
  });
  return projects;
};

SearchStore.find = function(id){
  return Object.assign({}, _projects[id]);
};

SearchStore.getSearch = function(){
  return _search.repeat(1);
};

var resetProjects= function(projects){
  _projects = projects;
};

var resetErrors = function(errors){
  _errors = errors;
};

var resetSearch = function(search){
  _search = search;
};


SearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SearchConstants.RESULTS_RECEIVED:
      resetProjects(payload.projects);
      SearchStore.__emitChange();
      break;

    case SearchConstants.NEW_SEARCH:
      resetSearch(payload.search);
      break;

    case SearchConstants.ERROR:
      resetErrors(payload.errors);
      SearchStore.__emitChange();
      break;
  }
};

module.exports = SearchStore;
