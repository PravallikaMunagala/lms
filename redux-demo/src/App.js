import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter-react";
import Test from "./components/test";

function App() {
  return (
    <div className="App">
      <Counter />
      <Test />
    </div>
  );
}

export default App;
