var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var UserForm = require('./components/user_form');
var ProjectIndex = require('./components/project_index');
var NavBar = require('./components/nav_bar');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <NavBar />
          <header><h1>Flow</h1></header>
          <ProjectIndex />
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App} />
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
     root
  );
});
