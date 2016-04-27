var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var UserForm = require('./components/user_form');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Flow</h1></header>
          {this.props.children}
        </div>
    );
  }
});

var theRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserForm}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(theRouter, root);
});
