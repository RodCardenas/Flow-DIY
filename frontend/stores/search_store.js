var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');

var _projects = {};
var _errors = {};
var SearchStore = new Store(AppDispatcher);

SearchStore.all = function () {
  return Object.assign({}, _projects);
};

SearchStore.find = function(id){
  return Object.assign({}, _projects[id]);
};

var resetProjects= function(projects){
  _projects = projects;
};

var resetErrors = function(errors){
  _errors = errors;
};


SearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SearchConstants.RESULTS_RECEIVED :
      resetProjects(payload.projects);
      SearchStore.__emitChange();
      break;

    case SearchConstants.ERROR:
      resetErrors(payload.errors);
      SearchStore.__emitChange();
      break;
  }
};

module.exports = SearchStore;
