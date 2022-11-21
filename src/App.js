import "./App.css";
import { BigBox, SmallBox } from "./components/BoxesComponent";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent label="button created with class component" />
      <ImageComponent
        customSrc="https://images.unsplash.com/photo-1668881233694-1825a663b2a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        customAlt="nature"
      />
      <div>
        <SmallBox />
        <BigBox />
      </div>
    </div>
  );
}

export default App;
