import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Hipo-logo" alt="logo" />
        <h1 id="title">Github Profile Explorer</h1>
        <div>
          <form>
            <input
              type="text"
              id="nameInput"
              placeholder="Type username"
            ></input>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
