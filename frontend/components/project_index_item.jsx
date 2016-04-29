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
        <a id={project.id} href={project.url}>
          <CloudinaryImage
            imageUrl={picture.picture_url}
            format={{height: 200, crop: "scale"}}
          />
        </a>;
    } else {
      image = "";
    }

    return (
      <li>
        {project.title}
        {project.author.email}
        {image}
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
