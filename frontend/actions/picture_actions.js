var AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  receivePicture: function(picture){
    AppDispatcher.dispatch({
      actionType: "PICTURE_RECEIVED",
      picture: picture
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: "PIC_ERROR",
      errors: error.responseJSON.errors
    });
  }

};
