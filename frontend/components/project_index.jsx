var React = require('react');
var ProjectStore = require('../stores/project_store');
var ProjectUtil = require('../util/project_api_util');
var ProjectIndexItem = require('./project_index_item');

var ProjectIndex = React.createClass({

  getInitialState: function(){
    return ({ projects: ProjectStore.all() });
  },

  componentDidMount: function(){
    ProjectUtil.fetchProjects();
    this.listenerToken = ProjectStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    this.setState({ projects:ProjectStore.all() });
  },

  render: function(){
    var projectsObj = this.state.projects;

    if(typeof projectsObj !== 'undefined'){
      var keys = Object.keys(projectsObj);

      var projects = keys.map(function(projectId){
        return (
            <ProjectIndexItem
              project={projectsObj[projectId]}
              key={projectId}
              className="project-index-item"
            />
        );
      });
    } else {
      projects = <div> No Projects </div>;
    }

    return (
      <ul>
        {projects}
      </ul>
    );
  }
});

module.exports = ProjectIndex;
