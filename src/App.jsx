import logo from "./logo.svg";
import "./App.css";
import Countdown from "./components/countdown/Countdown";

function App() {
  return (
    <>
      <div className="app">
        <header className="app-header">
          <h2>
            PlayGround <span className="small"> For</span>{" "}
          </h2>
          <img src={logo} alt="logo" className="app-logo" />
        </header>

        <main>
          <Countdown />
        </main>
      </div>
    </>
  );
}

export default App;
