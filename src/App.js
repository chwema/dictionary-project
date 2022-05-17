import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo img-fluid"
            alt="Dictionary logo"
          />
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Diamond" />
        </main>
        <footer className="App-footer">
          <a href="github.com/chwema/dictionary-project">open-source code</a> by
          Chido.
        </footer>
      </div>
    </div>
  );
}
