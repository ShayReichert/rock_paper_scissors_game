import React from "react";

const Main = ({
  paper,
  scissors,
  rock,
  playPaper,
  playScissors,
  playRock,
  addClass,
}) => {
  return (
    <div className="center">
      <div className="main-game">
        <div className="main-symbol main-paper" onClick={playPaper}>
          <div className="paper-circle">
            <img src={paper} alt="paper" />
          </div>
        </div>

        <div className="main-symbol main-scissors" onClick={playScissors}>
          <div className="scissors-circle">
            <img src={scissors} alt="scissors" />
          </div>
        </div>

        <div className="main-symbol main-rock" onClick={playRock}>
          <div className="rock-circle">
            <img src={rock} alt="rock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
