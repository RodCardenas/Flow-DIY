var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var NavBar = require('./components/nav_bar');
var Footer = require('./components/footer');
var ProjectDetail = require('./components/project_detail');
var ProjectCreator = require('./components/project_creator');
var ProjectEditor = require('./components/project_editor');
var UserDetail = require('./components/user_detail');
var ProjectIndex = require('./components/project_index');
var ProjectIndexMyFlow = require('./components/project_index_my_flow');
var Landing = require('./components/landing');
var Modal = require('react-modal');
var Cloudinary = require('cloudinary');

Cloudinary.config({
  cloud_name: 'flow-diy',
  api_key: '838255772545316',
  api_secret: 'NZWYT0r3l8qyPYn7ymE-OKolgcM'
});

var App = React.createClass({
  render: function(){
    return (
        <div className="single-page-application-container">
          <NavBar />
          <div className="page-content">
            {this.props.children}
          </div>
          <Footer />
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/projects/:projectId" component={ProjectDetail} />
    <Route path="/user/:userEmail" component={UserDetail} />
    <Route path="/myFlow/:userEmail" component={ProjectIndexMyFlow} />
    <Route path="/explore/" component={ProjectIndex} />
    <Route path="/project/new/" component={ProjectCreator} />
    <Route path="/edit/:projectId" component={ProjectEditor} />
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
