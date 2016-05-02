var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Cloudinary = require('cloudinary');

Cloudinary.config({
  cloud_name: 'flow-diy',
  api_key: '838255772545316',
  api_secret: 'NZWYT0r3l8qyPYn7ymE-OKolgcM'
});

var NavBar = require('./components/nav_bar');
var ProjectIndex = require('./components/project_index');
var ProjectDetail = require('./components/project_detail');
var Modal = require('react-modal');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <NavBar />
          {this.props.children}
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectIndex} />
    <Route path="/projects/:projectId" component={ProjectDetail} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  Modal.setAppElement(root);

  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
     root
  );

});
