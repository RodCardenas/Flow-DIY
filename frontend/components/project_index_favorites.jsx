var React = require('react');
var ProjectStore = require('../stores/project_store');
var SearchStore = require('../stores/search_store');
var ProjectUtil = require('../util/project_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndexFavorites = React.createClass({

  getInitialState: function(){
    console.log(this.props);
    this.userEmail = this.props.email;
    return ({ projects: ProjectStore.allForUser(this.userEmail) });
  },

  componentDidMount: function(){
    ProjectUtil.fetchProjects();
    this.listenerProjectStore = ProjectStore.addListener(this.onChange);
    this.listenerSearchStore = SearchStore.addListener(this.searchReady);
  },

  componentWillUnmount: function(){
    this.listenerSearchStore.remove();
    this.listenerProjectStore.remove();
  },

  onChange: function(){
    this.setState({ projects:ProjectStore.allForUser(this.userEmail) });
  },

  searchReady: function(){
    this.setState({ projects:SearchStore.allForUser(this.userEmail) });
  },

  render: function(){
    var projectsObj = this.state.projects;

    if(typeof projectsObj !== 'undefined' && Object.keys(projectsObj).length !== 0){
      var keys = Object.keys(projectsObj);

      var projects = keys.map(function(key){
        return (
          <ProjectIndexItem
            project={projectsObj[key]}
            key={projectsObj[key].id}
            />
        );
      });
    } else {
      projects = <div className="try-searching-projects">Your favorite projects will be shown here!</div>;
      }

      return (
        <div className="project-index-container">
          <h1 className="title">Favorites</h1>
          <ul className="project-index">
            {projects}
          </ul>
        </div>
      );
    }
  });

  module.exports = ProjectIndexFavorites;
