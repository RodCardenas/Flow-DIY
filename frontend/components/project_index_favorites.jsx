var React = require('react');
var ProjectStore = require('../stores/project_store');
var SearchStore = require('../stores/search_store');
var FavoriteStore = require('../stores/favorite_store');
var ProjectUtil = require('../util/project_api_util');
var FavoriteStoreUtil = require('../util/favorite_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndexFavorites = React.createClass({

  getInitialState: function(){
    return ({ projects: this.getFavoriteProjects() });
  },

  getFavoriteProjects: function(){
    var projectsObj = ProjectStore.all();
    var favorites = FavoriteStore.allForUser(this.props.user.id);
    var favoriteProjects = {};
    var favoritesKeys = Object.keys(favorites);
    var projectKeys = Object.keys(projectsObj);
    var projectIds = [];
    var projects = [];

    projectKeys.forEach(function(key){
      projectIds.push(projectsObj[key].id);
      projects.push(projectsObj[key]);
    });

    favoritesKeys.forEach(function(favoriteKey){
      var favorite = favorites[favoriteKey];
      var projId = favorite.project_id;
      var index = projectIds.indexOf(projId);

      if (index !== -1) {
        favoriteProjects[projId] = projects[index];
      }
    });

    return favoriteProjects;
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
    this.setState({ projects:this.getFavoriteProjects() });
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
        <div className="project-index-container-favs">
          <h1 className="title">Favorites</h1>
          <ul className="project-index-favs">
            {projects}
          </ul>
        </div>
      );
    }
  });

  module.exports = ProjectIndexFavorites;
