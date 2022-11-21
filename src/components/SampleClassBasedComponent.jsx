import React from "react";

class Sample extends React.Component {
  render() {
    return (
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe
        voluptatem eum, autem vel vitae ab quas. Amet dolorum atque consectetur
        commodi ea, deserunt temporibus, dolorem dolore esse provident expedita.
      </h1>
    );
  }
}

class ClassBasedApp extends React.Component {
  render() {
    return <Sample />;
  }
}

export default ClassBasedApp;
