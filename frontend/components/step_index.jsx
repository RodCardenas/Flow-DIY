var React = require('react');
var StepIndexItem = require('./step_index_item');

var SteptIndex = React.createClass({
  getInitialState: function(){
    return ({ steps:this.props.steps });
  },

  parseSteps: function(){
    var self = this;
    var stepsObj = {};
    var refKeys = Object.keys(this.refs);

    this.steps.forEach(function(step, idx){
      var theRef = self.refs[refKeys[idx]];
      var theRefsStep = theRef.parseStep();

      stepsObj["step" + theRefsStep.order] = theRefsStep;
    });

    return stepsObj;
  },

  addStep: function(e){
    e.preventDefault();
    var stepCnt = this.steps.length;
    var modSteps = this.steps.slice(0);
    modSteps.push(
      <StepIndexItem
        title=""
        body=""
        projectId={this.props.projectId}
        key={stepCnt + 1}
        order={stepCnt + 1} />
    );

    this.setState({steps: modSteps });
  },

  render: function(){
    console.log(this.state.steps);
    this.steps = this.state.steps.map(function(step, idx){
      var theRef = "step" + (idx + 1);
      return React.cloneElement(step, {ref:theRef});
    });

    return (
      <ul className="step-index">
        {this.steps}
        <button onClick={this.addStep}>Add Step</button>
      </ul>
    );
  }
});

module.exports = SteptIndex;
