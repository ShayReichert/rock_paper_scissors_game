import React from "react";
import { paperImg, scissorsImg, rockImg } from "../images";

const Main = ({ playPaper, playScissors, playRock }) => {
  return (
    <div className="center">
      <div className="main-game">
        <div className="main-symbol main-paper" onClick={playPaper}>
          <div className="paper-circle">
            <img src={paperImg} alt="paper" />
          </div>
        </div>

        <div className="main-symbol main-scissors" onClick={playScissors}>
          <div className="scissors-circle">
            <img src={scissorsImg} alt="scissors" />
          </div>
        </div>

        <div className="main-symbol main-rock" onClick={playRock}>
          <div className="rock-circle">
            <img src={rockImg} alt="rock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
