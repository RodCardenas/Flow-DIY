var React = require('react');
var Carousel = require('./carousel');
var ProjectIndex = require('./project_index');
var CloudinaryImage = require('./cloudinary_image');

var Landing = React.createClass({

  render: function(){
    return (
      <div className="landing">
        <Carousel />
        <div className="information-container">
          <div className="information-row">
            <p className="information-parragraph-odd">
              A place to host your ideas and share it with others. Whether you enjoy designing circuits, fabricating robots, or making upgrades to your home, Flow-DIY is the place to find cool new ideas to try!
            </p>

            <CloudinaryImage
              className="information-picture-odd"
              imageUrl="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,h_100,q_auto:best/v1467312457/graphic-design-tools-Feature_1290x688_MS_buhtrk.jpg"
             />
          </div>
          <br />
          <div className="information-row">
            <CloudinaryImage
              className="information-picture-even"
              imageUrl="http://res.cloudinary.com/flow-diy/image/upload/c_scale,e_sharpen,h_100,q_auto:best/v1465844575/17476841-Social-Network-Icon-Map-Stock-Photo-media_g1jlob.jpg"
            />

            <p className="information-parragraph-even">
              If you need a place to store all of your ideas, Flow-DIY was made for you. Not only will you be able to easily upload your projects in an organized fashion, but you will also have the opporunity to share it with others all around the globe.
            </p>
          </div>
          <br />
          <div className="information-row">
            <p className="information-parragraph-odd">
              Beyond being a do-it-yourself project repository, Flow-DIY is a hub for like-minded individuals in which they can encourage each other and make suggestions to each others projects. The community will appreciate your contributions and you can indulge in that of others. Go ahead and Flow!
            </p>

            <CloudinaryImage
              className="information-picture-odd"
              imageUrl="http://res.cloudinary.com/flow-diy/image/upload/v1465843826/co-created_icon_qz8tug.svg"
              format={{height: 100}} />
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Landing;
