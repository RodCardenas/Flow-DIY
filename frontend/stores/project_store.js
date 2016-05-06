var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/project_constants');

var _projects = {};
var _errors = [];
var ProjectStore = new Store(AppDispatcher);

ProjectStore.all = function (userEmail) {
  if(typeof userEmail === 'undefined'){
    return Object.assign({}, _projects);
  } else {
      var keys = Object.keys(_projects);
      var projects = {};
      keys.forEach(function(projectId){
        if(_projects[projectId].author.email === userEmail){
          projects[projectId] =  _projects[projectId];
        }
      });
      return projects;
  }
};

ProjectStore.find = function(id){
  return Object.assign({}, _projects[id]);
};

ProjectStore.findProjectByAuthorAndTitle = function(authorId, title){
  var keys = Object.keys(_projects);
  var theProjectBeingLookedFor = null;

  keys.forEach(function(key){
    var project = _projects[key];


    if(project.author.id === authorId && project.title === title){
      theProjectBeingLookedFor =  project;
    }
  });

  return theProjectBeingLookedFor;
};

ProjectStore.getErrors = function(){
  return  _errors.slice(0);
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

var updateProject = function(project){
  _projects[project.id] = project;
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

    case ProjectConstants.PROJECT_UPDATED:
      updateProject(payload.project);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.PROJ_ERROR:
      resetErrors(payload.errors);
      ProjectStore.__emitChange();
      break;
  }
};

module.exports = ProjectStore;
