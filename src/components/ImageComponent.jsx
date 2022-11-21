import React from "react";
class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.customSrc} alt={this.props.customAlt} />;
  }
}

export default ImageComponent;
