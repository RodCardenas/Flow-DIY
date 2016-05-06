var React = require('react');
var CloudinaryImage = require('./cloudinary_image');

var StepIndexItem = React.createClass({
  getInitialState: function(){
    return ({title: "", body: "", order: this.props.order, pictures:[], picture_urls: [], error:""});
  },

  titleChange: function(event) {
    this.setState({title: event.target.value});
  },

  bodyChange: function(event) {
    this.setState({body: event.target.value});
  },

  parseStep: function(){
    var stateForStep = Object.assign({}, this.state);

    stateForStep["pictures"] = stateForStep.picture_urls;
    delete stateForStep["picture_urls"];
    delete stateForStep["error"];

    console.log(stateForStep);
    return stateForStep;
  },

  addPicture: function(e){
    e.preventDefault();
    var self = this;

    window.cloudinary.openUploadWidget({
      cloud_name: 'flow-diy',
      upload_preset: 'flchasab',
      theme: 'minimal'},
      self.showPictures
    );
  },

  showPictures: function(error, result){
    if(error !== null){
      this.setState({error: error });
      return;
    }

    console.log(result);

    var pictureCnt = this.state.pictures.length;
    var modPictures = this.state.pictures.slice(0);
    var modURLs = this.state.picture_urls.slice(0);

    result.forEach(function(picture){
      console.log(picture.url);
      modURLs.push(picture.url);
      modPictures.push(
        <CloudinaryImage
          key={picture.public_id}
          imageUrl={picture.url}
          format={{height: 100, width: 100, crop: "fit"}} />
      );
    });

    this.setState({pictures: modPictures, picture_urls: modURLs});
  },

  render: function(){
    return (
      <div className="step-index-item">
        Step {this.state.order}
        <label>
          <div className="label-text">Title</div>
          <input
            type="text"
            id="step-title"
            onChange={this.titleChange}
            value={this.state.title} />
        </label>
        <label>
          <div className="label-text">Body</div>
          <input
            type="textarea"
            id="step-body"
            onChange={this.bodyChange}
            value={this.state.body} />
        </label>
        {this.state.pictures}
        {this.state.error}
        <br/ >
        <button onClick={this.addPicture}>Add Picture</button>
      </div>
    );
  }
});

module.exports = StepIndexItem;
