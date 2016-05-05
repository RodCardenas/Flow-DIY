var React = require('react');
var StepIndexItem = require('./step_index_item');

var SteptIndex = React.createClass({
  getInitialState: function(){
    return ({
      steps:[ <StepIndexItem key='1' order='1' ref='step1'/> ]
    });
  },

  parseSteps: function(){
    var self = this;
    var stepsObj = {};
    var refKeys = Object.keys(this.refs);

    this.state.steps.forEach(function(step, idx){
      var theRef = self.refs[refKeys[idx]];
      var theRefsStep = theRef.parseStep();

      stepsObj["step" + theRefsStep.order] = theRefsStep;
    });

    console.log(stepsObj);

    return stepsObj;
  },

  addStep: function(e){
    e.preventDefault();
    var stepCnt = this.state.steps.length;
    var modSteps = this.state.steps.slice(0);
    modSteps.push( <StepIndexItem key={stepCnt + 1} order={stepCnt + 1} /> );
    this.setState({steps: modSteps });
  },

  render: function(){

    var steps = this.state.steps.map(function(step){
      
    });

    return (
      <ul className="step-index">
        {steps}
        <button onClick={this.addStep}>Add Step</button>
      </ul>
    );
  }
});

module.exports = SteptIndex;
