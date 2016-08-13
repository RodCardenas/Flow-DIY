var PictureActions = require ('../actions/picture_actions');
var ProjectActions = require ('../actions/project_actions');

module.exports =  {

  createPicture: function(details){
    $.ajax({
      method: 'POST',
      url: '/api/pictures',
      data: {picture: details},
      success: function(project){
        ProjectActions.receiveProject(project);
      },
      error: function(error){
        PictureActions.handleError(error);
      }
    });
  },

  deletePicture: function(id){
    $.ajax({
      method: 'DELETE',
      url: '/api/pictures/' + id,
      success: function(project){
        ProjectActions.receiveProject(project);
      },
      error: function(error){
        PictureActions.handleError(error);
      }
    });
  },

};
