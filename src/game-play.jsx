import { useState } from "react";
//import { useEffect } from "react";

export default function GamePlay({
  currentView,
  gameIsPlaying,
  points,
  setPoints,
}) {
  const GridArea = 9;
  const [activeMoleHole, setActiveMoleHole] = useState(
    Math.floor(Math.random() * GridArea),
  );

  function MoleHole({ id, activeMoleHole, onWhack }) {
    return (
      <div className="hole" onClick={() => onWhack(id)}>
        {activeMoleHole === id && <div className="mole" />}
      </div>
    );
  }
  function onWhack(id) {
    console.log("clicked hole", id);
    console.log("active hole: ", activeMoleHole);
    if (id === activeMoleHole) {
      setPoints((prev) => prev + 1);
      const randomHole = Math.random() * GridArea;
      setActiveMoleHole(Math.floor(randomHole));
    }
  }

  function GameBoard({ activeMoleHole, onWhack }) {
    const holes = Array.from({ length: 9 }, (_, index) => index);

    return (
      <div className="game-page">
        <div className="game-board">
          {holes.map((id) => (
            <MoleHole
              key={id}
              id={id}
              activeMoleHole={activeMoleHole}
              onWhack={onWhack}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <label>Points: {points}</label>
      <GameBoard
        activeMoleHole={activeMoleHole}
        onWhack={onWhack}
        MoleHole={MoleHole}
      />
      <p>Active Hole: {activeMoleHole}</p>
    </div>
  );
}
