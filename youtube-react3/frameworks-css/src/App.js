import "./App.css";
import Bootstrap from "./components/Bootstrap";
import Bulma from "./components/Bulma";
import Title from "./components/general/Title";

function App() {
  return (
    <div>
      <Title text="Frameworks de React" />
      <Bootstrap />
      <Bulma />
    </div>
  );
}

export default App;
