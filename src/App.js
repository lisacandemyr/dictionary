import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            This project is coded by <strong>Lisa Candemyr</strong>.{" "}
            <a
              href="https://github.com/lisacandemyr/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
