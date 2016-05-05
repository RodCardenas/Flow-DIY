var React = require('react');
var ProjectStore = require('../stores/project_store');
var SearchStore = require('../stores/search_store');
var ProjectUtil = require('../util/project_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndex = React.createClass({

  getInitialState: function(){
    if (typeof this.props.params !== 'undefined') {
      this.userEmail = this.props.params.userEmail;
    }
    return ({ projects: ProjectStore.all(this.userEmail) });
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
      projects = <div className="no-projects"> Sorry, no projects matched your search... </div>;
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
