var React = require('react');

var Footer = React.createClass({
  scrollToTop: function(){
    window.scrollTo(0, 0);
  },

  render: function(){
    return (
      <div className="footer">
        <ul className="footer-links">
          <ul className="footer-section-title">Creator
            <a href="https://github.com/RodCardenas/Flow-DIY">
              Github
            </a>
            <a href="https://www.linkedin.com/in/rodrigoecardenas">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/rocko2k7">
              Facebook
            </a>
          </ul>
        </ul>

        <div className="footer-top" onClick={this.scrollToTop}>
          Back to Top
        </div>

        <div className="footer-name" onClick={this.scrollToTop}>
          Flow-DIY
        </div>
      </div>
    );
  }
});

module.exports = Footer;
