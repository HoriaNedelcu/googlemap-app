import logo from "./logo.svg";
import "./App.css";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <p> TYou can search your next holiday destination</p>
      <GoogleMap />
    </div>
  );
}

export default App;
