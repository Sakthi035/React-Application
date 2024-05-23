import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const CalculateBmi = () => {
    if( height && weight){
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if(bmiValue < 18.5){
          setBmiStatus("Underweight");
        }else if(bmiValue >= 18.5 && bmiValue < 24.9){
          setBmiStatus("Normal");
        }else if(bmiValue >= 24.9 && bmiValue < 29.9){
          setBmiStatus("OverWeight");
        }else{
          setBmiStatus("Obese")
        }
    }else{
      setBmi(null);
      setBmiStatus("");
    }
  }

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BIM CALCULATOR</h1>
          <div className="input-container">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={CalculateBmi}>Calculate BMI</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App
