var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/project_constants');

module.exports = {
  receiveProject: function(project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
  },

  receiveProjects: function(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  createdProject: function(project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_CREATED,
      project: project
    });
  },

  deletedProject: function(project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_DESTROYED,
      project: project
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJ_ERROR,
      errors: error.responseJSON.errors
    });
  }

};
