import Popup from "./components/Popup";
import { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setPopupStatus] = useState(false);

  const updateStatus = () => {
    setPopupStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="App">
      <div className="inner-content">
        <h1>welcome</h1>
        <br />
        <button className="open-btn" onClick={updateStatus}>
          Open Popup
        </button>
        <Popup trigger={showPopup} updateStatus={updateStatus}>
          <h1>I'm your Popup</h1>
        </Popup>
      </div>
    </div>
  );
}

export default App;
