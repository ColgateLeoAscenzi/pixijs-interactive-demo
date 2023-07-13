import './App.css';
import InfoCard from "./components/InfoCard";
import PixiOverlay from "./components/PixiOverlay";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="backgroundVideo">
          <source src="./perserverencePath.mp4" type="video/mp4"/>
      </video>
        <PixiOverlay/>
    </div>
  );
}

export default App;
