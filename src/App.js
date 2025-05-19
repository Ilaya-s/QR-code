import React from "react";
import "./App.css";
import qrImage from "../public/images/image-qr-code.png"; // adjust path if needed

function App() {
  return (
    <div className="card">
      <img src={qrImage} alt="QR code" width={285} height={285} />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills
        to the next level
      </p>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Arekkusu17">Alex Fernández</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;