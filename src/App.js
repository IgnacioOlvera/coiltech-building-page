import logo from "./coiltech_noback.svg";
import fb_logo from "./fb_logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 className="text">Página en construcción</h1>
          <h5 className="text">Encuentranos en Facebook</h5>
        </p>

        <img
          src={fb_logo}
          alt="fb-logo"
          className="fbLogo"
          href="https://www.facebook.com/CoiltechMX"
        />
        <p>
          <a
            className="App-link"
            href="https://www.facebook.com/CoiltechMX"
            target="_blank"
            rel="noopener noreferrer"
          >@CoiltechMX</a> 
        </p>
      </header>
    </div>
  );
}

export default App;
