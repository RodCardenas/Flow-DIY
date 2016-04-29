var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/project_constants');

var _projects = {};
var _errors = {};
var ProjectStore = new Store(AppDispatcher);

ProjectStore.all = function () {
  return Object.assign({}, _projects);
};

ProjectStore.find = function(id){
  return Object.assign({}, _projects[id]);
};

var resetProjects = function(projects){
  _projects = projects;
};

var addProject = function(project){
  _projects[project.id] = project;
};

var removeProject = function(project){
  delete _projects[project.id];
};

var resetErrors = function(errors){
  _errors = errors;
};


ProjectStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProjectConstants.PROJECT_RECEIVED :
      addProject(payload.project);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.PROJECTS_RECEIVED :
      resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.PROJECT_CREATED:
      addProject(payload.project);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.PROJECT_DESTROYED:
      removeProject(payload.project);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.ERROR:
      resetErrors(payload.errors);
      ProjectStore.__emitChange();
      break;
  }
};

module.exports = ProjectStore;
