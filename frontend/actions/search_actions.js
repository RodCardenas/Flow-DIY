var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');

module.exports = {
  receiveSearchResults: function(projects){
    AppDispatcher.dispatch({
      actionType: SearchConstants.RESULTS_RECEIVED,
      projects: projects
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
