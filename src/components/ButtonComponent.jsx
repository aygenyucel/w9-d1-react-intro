// Create a new component as a function, called ButtonComponent: it should return a button tag. The button label should be received from the props of the component and displayed between the <button></button> tags.

const ButtonComponent = (props) => {
  return <button>{props.label}</button>;
};

export default ButtonComponent;
