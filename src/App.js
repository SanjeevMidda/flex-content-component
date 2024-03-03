import "./index.css";
import Square from "./components/Square";

function App() {
  let squares = [];

  for (let index = 0; index < 1550; index++) {
    squares.push(<Square />);
  }

  return (
    <div className="App">
      <h4>block</h4>
      <div className="container">{squares}</div>
    </div>
  );
}

export default App;
