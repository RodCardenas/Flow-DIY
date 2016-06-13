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

};
