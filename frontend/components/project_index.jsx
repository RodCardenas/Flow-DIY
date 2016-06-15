var React = require('react');
var ProjectStore = require('../stores/project_store');
var SearchStore = require('../stores/search_store');
var ProjectUtil = require('../util/project_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndex = React.createClass({

  getInitialState: function(){
    if (typeof this.props.params !== 'undefined') {
      this.userEmail = this.props.params.userEmail;
      return ({ projects: ProjectStore.all(this.userEmail) });
    }
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
    if (typeof this.props.params !== 'undefined') {
      this.userEmail = this.props.params.userEmail;
    }
    this.setState({ projects:ProjectStore.all(this.userEmail) });
  },

  searchReady: function(){
    this.setState({ projects:SearchStore.all(this.userEmail) });
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
      if(window.location.href.includes("/explore/")){
        if (SearchStore.getSearch() === ""){
          projects = <div className="try-searching-projects">Try searching for something! </div>;
        } else {
          projects = <div className="try-searching-projects">Sorry, we couldn't find anything that matched your search. Try searching for something else! </div>;
        }

      } else {
        projects = <div className="try-searching-projects">Sorry, we couldn't find a project you've created with that name.</div>;
      }
    }

    return (
      <div className="project-index-container">
        <ul className="project-index">
          {projects}
        </ul>
      </div>
    );
  }
});

module.exports = ProjectIndex;
