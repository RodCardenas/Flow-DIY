var SearchActions = require ('../actions/search_actions');

module.exports =  {
  searchProjectsContaining: function(searchString){
    SearchActions.setSearch(searchString);
    
    $.ajax({
      method: 'GET',
      url: '/api/projects/search',
      data: {search: searchString},
      success: function(projects){
        SearchActions.receiveSearchResults(projects);
      },
      error: function(error){
        SearchActions.handleError(error);
      }
    });
  }
};
