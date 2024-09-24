import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import tick from './assets/icons8-tick-500.png';
import cross from './assets/icons8-cross-100.png';
import mark from './assets/icons8-question-100.png';



function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkUrl = async () => {
    const response = await fetch("http://localhost:5000/check-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  const getImage = () => {
    // Return the appropriate image based on the result
    if (result === "phishing") {
      return cross;
    } else if (result === "real") {
      return tick;
    } else {
      return mark; // Default image when page loads or result is null
    }
  };

  return (
    <div className="main-container">
      <div className="wrapper">
        <span className="text">URL auth</span>
        <span className="text-2">Contact Us</span>
      </div>
      <div className="section">
        <div className="section1">
          <div className="boundary">
          <div className="inner_circle">
              <img
                width="170"
                height="170"
                src={getImage()}
                alt="status-mark"
              />
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="url-input">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="Enter website url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="url-button">
            <button className="Btn" onClick={checkUrl}>
              Check URL
            </button>
          </div>
          {result && (
          <div className="result">
            <h3>{result === "phishing" ? "The url belongs to a phishing website" : "The url belongs to a real website"}</h3>
          </div>
        )}
        </div>

      </div>
      {/* <div className="pic" /> */}

        <Footer />
    </div>
  );
}

export default App;
