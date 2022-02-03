import logo from "./logo.svg";
import "./App.css";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#060f0f" }}>Google Maps App</h1>
      <p style={{ color: "#060f00" }}>
        {" "}
        You can search your next holiday destination
      </p>
      <div style={{}}>
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
