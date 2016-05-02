var React = require('react');
var UserApiUtil = require('../util/user_api_util');

var Search = React.createClass({

  getInitialState: function(){
    return ({search: "" });
  },

  onChange: function(event){
    this.setState({search: event.currentTarget.value});
  },

  render: function(){
    console.log(this.state.search);
    return (
      <div className="search">
        <label>Search
          <input type="text" value={this.state.search} onChange={this.onChange} />
        </label>
      </div>
    );
  }
});

module.exports = Search;
