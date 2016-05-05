var React = require('react');
var ProjectStore = require('../stores/project_store');
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
    this.listenerToken = ProjectStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(){
    if (typeof this.props.params !== 'undefined') {
      this.userEmail = this.props.params.userEmail;
    }
    this.setState({ projects:ProjectStore.all(this.userEmail) });
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
            />
        );
      });
    } else {
      projects = <div> No Projects </div>;
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
