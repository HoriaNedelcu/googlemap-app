import logo from "./logo.svg";
import "./App.css";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "46px", marginBottom: "6px" }}>Google Maps App</h1>
      <p style={{ color: "#060f00", margin: "0 0 10px" }}>
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
