import Welcome from "./Welcome";
import GamePlay from "./game-play";
import { useState } from "react";

export default function App() {
  const [currentView, setCurrentView] = useState(`A`);
  let points = 0;

  //render welcome page function
  const renderWelcomeA = () => {
    return (
      <div>
        <Welcome />
      </div>
    );
  };
  // render gameplay page
  const renderGamePageB = () => {
    return (
      <div>
        <GamePlay />
      </div>
    );
  };
  // toggle button function
  const handleToggle = () => {
    setCurrentView((prev) => (prev === `A` ? `B` : `A`));
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {currentView === "A" ? "Start" : "Restart"}
      </button>

      {currentView === `A` ? renderWelcomeA() : renderGamePageB()}
    </div>
  );
}
