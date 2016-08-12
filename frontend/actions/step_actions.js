var AppDispatcher = require('../dispatcher/dispatcher');
var StepConstants = require('../constants/step_constants');

module.exports = {
  receiveStep: function(step){
    AppDispatcher.dispatch({
      actionType: StepConstants.STEP_RECEIVED,
      step: step
    });
  },

  receiveSteps: function(steps){
    AppDispatcher.dispatch({
      actionType: StepConstants.STEPS_RECEIVED,
      steps: steps
    });
  },

  createdStep: function(step){
    AppDispatcher.dispatch({
      actionType: StepConstants.STEP_CREATED,
      step: step
    });
  },

  deletedStep: function(step){
    AppDispatcher.dispatch({
      actionType: StepConstants.STEP_DESTROYED,
      step: step
    });
  },

  updatedSteps: function(steps){
    AppDispatcher.dispatch({
      actionType: StepConstants.STEPS_UPDATED,
      steps: steps
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: StepConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }

};
