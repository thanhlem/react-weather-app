import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/thanhlem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thanh Le
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
