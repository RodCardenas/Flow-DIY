var React = require('react');
var StepIndexItem = require('./step_index_item');

var StepIndex = React.createClass({
  getInitialState: function(){
    return ({steps:[<StepIndexItem key={1} order={1}/>]});
  },

  addStep: function(){
    var stepCnt = this.state.steps.length;
    var modSteps = this.state.steps.slice(0);
    modSteps.push(<StepIndexItem key={stepCnt + 1} order={stepCnt + 1}/>);
    this.setState({steps: modSteps});
  },

  render: function(){
    return (
      <div>
        Project Steps
        {this.state.steps}
        <button onClick={this.addStep}>Add Step</button>
      </div>
    );
  }
});

module.exports = StepIndex;
