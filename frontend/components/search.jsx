var React = require('react');
var SearchStore = require('../stores/search_store');
var SearchApiUtil = require('../util/search_api_util');

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

  onSearchComplete: function(projects){
    this.setState({projects: SearchStore.all()});
  },

  selectResult: function(project){
    this.context.router.push("/projects/" + project.id);
    this.setState({search: ""});
    window.location.reload();
  },

  render: function(){
    var projectsObj = this.state.projects;

    if(typeof projectsObj !== 'undefined' && this.state.search !== ""){
      var keys = Object.keys(projectsObj);
      var self = this;

      var projects = keys.map(function(projectId){
        var project = projectsObj[projectId];
        return (
          <li
            onClick={self.selectResult.bind(self, project)}
            project={project}
            key={projectId}>
              {project.title}
          </li>
        );
      });

      projects = <ul className="search-results">{projects}</ul>;
    } else {
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
