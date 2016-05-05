var ProjectActions = require ('../actions/project_actions');

module.exports =  {
  fetchProject: function(id){
    $.ajax({
      method: 'GET',
      url: '/api/projects/' + id,
      success: function(project){
        ProjectActions.receiveProject(project);
      },
      error: function(error){
        ProjectActions.handleError(error);
      }
    });
  },

  fetchProjects: function(){
    $.ajax({
      method: 'GET',
      url: '/api/projects',
      success: function(projects){
        ProjectActions.receiveProjects(projects);
      },
      error: function(error){
        ProjectActions.handleError(error);
      }
    });
  },

  createProject: function(details){
    $.ajax({
      method: 'POST',
      url: '/api/projects',
      data: {project: details},
      success: function(project){
        ProjectActions.createdProject(project);
      },
      error: function(error){
        ProjectActions.handleError(error);
      }
    });
  },

  deleteProject: function(id){
    $.ajax({
      method: 'DELETE',
      url: 'api/project/' + id,
      success: function(project){
        ProjectActions.deletedProject(project);
      },
      error: function(error){
        ProjectActions.handleError(error);
      }
    });
  },

};
