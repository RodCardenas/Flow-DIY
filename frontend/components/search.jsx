var React = require('react');
var SearchStore = require('../stores/search_store');
var SearchApiUtil = require('../util/search_api_util');
var ProjectUtil = require('../util/project_api_util');
var ProjectActions = require('../actions/project_actions');

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return ({search: "", projects:{} });
  },

  componentDidMount: function(){
    this.listenerToken = SearchStore.addListener(this.onSearchComplete);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  onChange: function(event){
    this.setState({search: event.currentTarget.value});
    SearchApiUtil.searchProjectsContaining(event.currentTarget.value);
  },

  onSearchComplete: function(){
    this.setState({projects: SearchStore.all()});
  },

  selectResult: function(project){
    ProjectUtil.fetchProject(project.id);
    this.context.router.push("/projects/" + project.id);
    this.setState({search: ""});
  },

  render: function(){
    var projectsObj = this.state.projects;

    if(typeof projectsObj !== 'undefined' && this.state.search !== ""){
      var keys = Object.keys(projectsObj);
      var self = this;

      var projects = keys.map(function(key){
        var project = projectsObj[key];
        return (
          <li
            onClick={self.selectResult.bind(self, project)}
            project={project}
            key={projectsObj[key].id}>
              {project.title}
          </li>
        );
      });

      projects = <ul className="search-results">{projects}</ul>;
    } else {
      projects = null;
    }

    if(!window.location.href.includes("/projects/") &&
      !window.location.href.includes("/#/?")
    ){
      projects = null;
    }


    return (
      <div className="search">
        <label>Search
          <input type="text" value={this.state.search} onChange={this.onChange} />
          {projects}
        </label>
      </div>
    );
  }
});

module.exports = Search;
