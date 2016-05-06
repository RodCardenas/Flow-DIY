var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var Carousel = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({
      pic1:"active",
      pic2:"",
      pic3:"",
      pic4:""
    });
  },

  setPicState: function(){
    var keys = Object.keys(this.state);
    var modState = Object.assign({}, this.state);
    var index;
    var self = this;
    var firstKey = Object.keys(modState)[0];
    var lastKey = Object.keys(modState)[Object.keys(modState).length-1];

    if(modState[lastKey] === 'active'){
      modState[lastKey] = '';
      modState[firstKey] = 'active';
    } else {
      keys.forEach(function(key, idx){
        if (modState[key] === 'active'){
          modState[key] = "";
          index = idx;
        } else if (idx === (index + 1)) {
          modState[key] = "active";
        } else {
          modState[key] = "";
        }
      });
    }
    this.setState(modState);
  },

  componentDidMount: function(){
    var self = this;
    this.intervalToken = setInterval(self.setPicState, 5000);
  },

  componentWillUnmount: function(){
    clearInterval(this.intervalToken);
  },

  activateImage: function(position){
    var keys = Object.keys(this.state);
    var modState = Object.assign({}, this.state);
    var keyForPosition = Object.keys(modState)[position];

    keys.forEach(function(key){
        modState[key] = "";
    });

    modState[keyForPosition] = 'active';
    this.setState(modState);
  },

  explore: function(){
    this.context.router.push("/explore/");
  },

  render: function(){
    return (
      <div className="carousel-container">
        <span className="carousel-overlay" onClick={this.explore}>
          <span id="site-title">Flow</span>
          <br/>
          <span id="site-catchphrase">let your ideas flow through others</span>
          <span id="site-description">come explore diy ideas or submit your own</span>
        </span>

        <ul className="carousel">
          <CloudinaryImage
            className={"image" + " " + this.state.pic1}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462402016/photo-1458007683879-47560d7e33c3_rmkukq.jpg"}
            format={{width: 1839}} />

          <CloudinaryImage
            className={"image" + " " + this.state.pic2}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462469877/photo-1416339212457-ef9ffadc2903_ao0tsq.jpg"}
            format={{width: 1839, angle: 270}} />

          <CloudinaryImage
            className={"image" + " " + this.state.pic3}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462469977/New_Program_for_old_Microcontroller_gz34xw.jpg"}
            format={{width: 1839}} />

        <CloudinaryImage
            className={"image" + " " + this.state.pic4}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462402654/Nixie-009_hr1l56.jpg"}
            format={{width: 1839}} />
        </ul>
      </div>
    );
  }
});

module.exports = Carousel;
