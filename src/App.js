import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        disabled={isChecked}
        style={{ backgroundColor: isChecked ? 'gray': buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={isChecked}
        area-checked={isChecked.toString()}
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
