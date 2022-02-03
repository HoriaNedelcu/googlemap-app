import logo from "./logo.svg";
import "./App.css";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <p> You can search your next holiday destination</p>
      <div style={{ margin: 20 }}>
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
