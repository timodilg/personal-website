import React from "react";
import "./App.css";
import profileImg from "./images/timo-profile-700px.png";

function App() {
  return (
    <main>
      <div>
        <img src="{profileImg}" alt="timo dilg" className="profilePicture" />
        <h1>Timo Dilg</h1>
        <p>Frontend Developer</p>
        <p>Icons Profile einsetzen</p>
      </div>

      <p className="WelcomeHeadline">
        Hi, my name is Timo. I am a Frontend Developer living in Hamburg,
        Germany.
      </p>
    </main>
  );
}

export default App;
