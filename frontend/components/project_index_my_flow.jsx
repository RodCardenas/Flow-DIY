var React = require('react');
var ProjectStore = require('../stores/project_store');
var SearchStore = require('../stores/search_store');
var ProjectUtil = require('../util/project_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndexMyFlow = React.createClass({

  getInitialState: function(){
    this.userEmail = this.props.params.userEmail;
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
        projects = <div className="try-searching-projects">Sorry, we couldn't find a project you've created with that name.</div>;
      }

    return (
      <div className="project-index-container">
        <h1 className="title">My Flow</h1>
        <ul className="project-index">
          {projects}
        </ul>
      </div>
    );
  }
});

module.exports = ProjectIndexMyFlow;
