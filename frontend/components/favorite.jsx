var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var Favorite = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  addFavorite: function(){
    this.context.router.push("/projects/" + this.props.project.id);
  },

  render: function(){
    if(this.props.favorite){
      return (
        <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545966/favorite.jpg"
        onClick={this.addFavorite}/>
      );
    } else {
      return (
        <input className="favorite" type="image" src="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,q_auto:best,w_30/v1468545951/notFavorite.jpg" onClick={this.addFavorite}/>
      );
    }
  }
});

module.exports = Favorite;
