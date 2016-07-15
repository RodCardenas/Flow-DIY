var React = require('react');
// var FavoriteStore = require('../stores/favorite_store');
// var FavoriteUtil = require('../util/favorite_api_util');
var CloudinaryImage = require('./cloudinary_image');
var Favorite = require('./favorite');

var ProjectIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return ({project: this.props.project });
  },

  goToProject: function(){
    this.context.router.push("/projects/" + this.state.project.id);
  },

  render: function(){
    var project = this.state.project;
    var picture = project.pictures[0];

    if (typeof picture !== 'undefined'){
      var image =
        <div
          className="project-image"
          onClick={this.goToProject}
          id={project.id}
          href={project.url}>
          <CloudinaryImage
            imageUrl={picture.picture_url}
            format={{height: 270, width: 324, crop: "fit"}} />
          <div className="project-text-container">
            <div className="project-title-text">
              {project.title}
            </div>
          </div>
        </div>;
    } else {
      image = "";
    }

    var email = "mailto:" + project.author.email + "?Subject=" + project.title;

    if (project.title.length > 50){
      var title =  project.title.substring(0,45) + "...";
    } else {
      title =  project.title;
    }

    return (
      <li className="project-index-item">
        {image}
        <div className="project-info">
          <span className="project-title" onClick={this.goToProject}>
            {title}
          </span><br></br>
          <span>
            by <a className="project-author" href={email}>
                {project.author.email}
               </a>
          </span>
        </div>
      </li>
    );
    // <Favorite project={project}/>
  }
});

module.exports = ProjectIndexItem;
