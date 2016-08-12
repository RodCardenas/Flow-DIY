var PictureActions = require ('../actions/picture_actions');

module.exports =  {

  createPicture: function(details){
    $.ajax({
      method: 'POST',
      url: '/api/pictures',
      data: {picture: details},
      success: function(picture){
        PictureActions.receivePicture(picture);
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
      success: function(picture){
        PictureActions.removePicture(picture);
      },
      error: function(error){
        PictureActions.handleError(error);
      }
    });
  },

};
