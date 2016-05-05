var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var StepConstants = require('../constants/step_constants');

var _steps = {};
var _errors = {};
var StepStore = new Store(AppDispatcher);

StepStore.all = function (projectId) {
  if(typeof projectId === 'undefined'){
    return Object.assign({}, _steps);
  } else {
      var keys = Object.keys(_steps);
      var steps = {};
      keys.forEach(function(stepId){
        if(_steps[stepId].project_id === projectId){
          steps[stepId] =  _steps[stepId];
        }
      });
      return steps;
  }
};

StepStore.find = function(id){
  return Object.assign({}, _steps[id]);
};

StepStore.findStepByProjectAndTitle = function(projectId, title){
  var keys = Object.keys(_steps);
  var theStepBeingLookedFor = null;

  keys.forEach(function(key){
    var step = _steps[key];

    if(step.author_id === projectId && step.title === title){
      theStepBeingLookedFor =  step;
    }
  });

  return theStepBeingLookedFor;
};

var resetSteps = function(steps){
  _steps = steps;
};

var addStep = function(step){
  if (typeof step !== 'undefined') {
    _steps[step.id] = step;
  }
};

var removeStep = function(step){
  delete _steps[step.id];
};

var resetErrors = function(errors){
  _errors = errors;
};


StepStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case StepConstants.STEP_RECEIVED :
      addStep(payload.step);
      StepStore.__emitChange();
      break;

    case StepConstants.STEPS_RECEIVED :
      resetSteps(payload.steps);
      StepStore.__emitChange();
      break;

    case StepConstants.STEP_CREATED:
      addStep(payload.step);
      StepStore.__emitChange();
      break;

    case StepConstants.STEP_DESTROYED:
      removeStep(payload.step);
      StepStore.__emitChange();
      break;

    case StepConstants.ERROR:
      resetErrors(payload.errors);
      StepStore.__emitChange();
      break;
  }
};

module.exports = StepStore;
