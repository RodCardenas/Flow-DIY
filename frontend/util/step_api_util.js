var StepActions = require ('../actions/step_actions');

module.exports =  {
  fetchStep: function(projectId, stepId){
    $.ajax({
      method: 'GET',
      url: '/api/projects/' + projectId + "/steps/" + stepId,
      success: function(step){
        StepActions.receiveStep(step);
      },
      error: function(error){
        StepActions.handleError(error);
      }
    });
  },

  fetchSteps: function(projectId){
    $.ajax({
      method: 'GET',
      url: '/api/projects/' + projectId + "/steps",
      success: function(steps){
        StepActions.receiveSteps(steps);
      },
      error: function(error){
        StepActions.handleError(error);
      }
    });
  },

  createStep: function(projectId, details){
    $.ajax({
      method: 'POST',
      url: '/api/projects/' + projectId + "/steps",
      data: {api_step: details},
      success: function(step){
        StepActions.createdStep(step);
      },
      error: function(error){
        StepActions.handleError(error);
      }
    });
  },

  updateStep: function(projectId, stepId, details){
    $.ajax({
      method: 'PATCH',
      url: '/api/projects/' + projectId + "/steps/" + stepId,
      data: {api_step: details},
      success: function(step){
        StepActions.createdStep(step);
      },
      error: function(error){
        StepActions.handleError(error);
      }
    });
  },

  updateStepOrder: function(projectId, stepId, details){
    $.ajax({
      method: 'PATCH',
      url: '/api/projects/' + projectId + "/steps/" + stepId + "/order",
      data: {api_step: details},
      success: function(steps){
        StepActions.updatedSteps(steps);
      },
      error: function(error){
        StepActions.handleError(error);
      }
    });
  },

  deleteStep: function(projectId, stepId){
    $.ajax({
      method: 'DELETE',
      url: '/api/projects/' + projectId + "/steps/" + stepId,
      success: function(step){
        StepActions.deletedStep(step);
      },
      error: function(error){
        StepActions.handleError(error);
      }
    });
  },

};
