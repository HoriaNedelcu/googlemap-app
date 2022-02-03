import logo from "./logo.svg";
import "./App.css";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#f7f9f8", fontSize: "46px" }}>Google Maps App</h1>
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
