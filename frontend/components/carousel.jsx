var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var Carousel = React.createClass({

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
    setInterval(self.setPicState, 5000);
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

  render: function(){
    return (
      <div className="carousel-container">
          <ul className="carousel">
            <CloudinaryImage
              className={"image" + " " + this.state.pic1}
              imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462382665/raspberry-gb_yafizd.jpg"}
              format={{height: 600}} />

            <CloudinaryImage
              className={"image" + " " + this.state.pic2}
              imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462382423/nixie-clock_gzonw7.jpg"}
              format={{height: 600}} />

            <CloudinaryImage
              className={"image" + " " + this.state.pic3}
              imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462382105/rf-condenser-microphone_opzo1m.jpg"}
              format={{height: 600}} />

          <CloudinaryImage
              className={"image" + " " + this.state.pic4}
              imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462322142/maxresdefault_srs4xd.jpg"}
              format={{height: 600}} />
          </ul>
      </div>
    );
  }
});

module.exports = Carousel;
