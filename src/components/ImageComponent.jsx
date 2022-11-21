// Create a new component as a class, called ImageComponent: it should return an image tag. The image src as well as the alt attributes should be received from the props of the component and assigned to the <img /> tag.
import React from "react";
class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.customSrc} alt={this.props.customAlt} />;
  }
}

export default ImageComponent;
