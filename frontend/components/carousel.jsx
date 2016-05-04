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

  render: function(){
    return (
      <div className="carousel-container">
        <ul className="carousel">
          <CloudinaryImage
            className={"image" + " " + this.state.pic1}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462322093/maxresdefault_tleb64.jpg"}
            format={{height: 600, crop: "scale"}} />

          <CloudinaryImage
            className={"image" + " " + this.state.pic2}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462322176/tumblr_mt7xleW5EG1sg9x8ro1_1280_haydtd.jpg"}
            format={{height: 600, crop: "scale"}} />

          <CloudinaryImage
            className={"image" + " " + this.state.pic3}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462322142/maxresdefault_srs4xd.jpg"}
            format={{height: 600, crop: "scale"}} />

        <CloudinaryImage
            className={"image" + " " + this.state.pic4}
            imageUrl={"http://res.cloudinary.com/flow-diy/image/upload/v1462321705/original_i2oeco.jpg"}
            format={{height: 600, crop: "scale"}} />
        </ul>
      </div>

    );
  }
});

module.exports = Carousel;
