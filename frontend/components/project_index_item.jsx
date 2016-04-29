var React = require('react');
var ProjectStore = require('../stores/project_store');
var ProjectUtil = require('../util/project_api_util');
var CloudinaryImage = require('./cloudinary_image');

var ProjectIndexItem = React.createClass({

  getInitialState: function(){
    return ({project: this.props.project });
  },

  render: function(){
    var project = this.state.project;
    var picture = project.pictures[0];

    if (typeof picture !== 'undefined'){
      var image =
        <a className="project-image" id={project.id} href={project.url}>
          <CloudinaryImage
            imageUrl={picture.picture_url}
            format={{height: 270, width: 324, crop: "fit"}}
          />
        </a>;
    } else {
      image = "";
    }

    var email = "mailto:" + project.author.email + "?Subject=" + project.title;

    return (
      <li className="project-index-item">
        {image}
        <div className="project-info">
          <span className="project-title">
            {project.title}
          </span><br></br>
          <span>
            by <a className="project-author" href={email}>
                {project.author.email}
               </a>
          </span>
        </div>
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
