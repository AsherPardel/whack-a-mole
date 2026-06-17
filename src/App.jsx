import Welcome from "./Welcome";
import GamePlay from "./game-play";
import { useState } from "react";

export default function App() {
  const [currentView, setCurrentView] = useState(`A`);
  const [gameIsPlaying, setGameIsPlaying] = useState(false);
  const [points, setPoints] = useState(0);

  //
  //
  //
  const startGame = () => {
    setPoints(0);
    setGameIsPlaying((prev) => !prev);
  };

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
        <GamePlay
          gameIsPlaying={gameIsPlaying}
          points={points}
          setPoints={setPoints}
        />
      </div>
    );
  };
  // toggle button function
  const handleToggle = () => {
    setCurrentView((prev) => (prev === `A` ? `B` : `A`));
    startGame();
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
