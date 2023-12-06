import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5 className="searchAppTitle">Search app</h5>
        <div className="largeTitleContainer">
          <h3 className="largeTitle">Find in records</h3>
        </div>
        <Main />
      </header>
    </div>
  );
}

export default App;
