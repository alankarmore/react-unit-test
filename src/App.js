import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

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
        area-checked={isChecked.toString()} /// this for an accessibility or for the screen readers
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
