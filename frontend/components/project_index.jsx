var React = require('react');
var ProjectStore = require('../stores/project_store');
var SearchStore = require('../stores/search_store');
var ProjectUtil = require('../util/project_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndex = React.createClass({

  getInitialState: function(){
    return ({ projects: ProjectStore.all() });
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
    this.setState({ projects:ProjectStore.all() });
  },

  searchReady: function(){
    this.setState({ projects:SearchStore.all() });
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
      if (SearchStore.getSearch() !== ""){
        projects = <div className="try-searching-projects">Sorry, we couldn't find anything that matched your search. Try searching for something else! </div>;
        }
      }
      return (
        <div className="project-index-container">
          <h1 className="title">Community Projects</h1>
          <ul className="project-index">
            {projects}
          </ul>
        </div>
      );
    }
  });

  module.exports = ProjectIndex;
