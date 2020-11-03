import React from "react";

const Main = ({ paper, scissors, rock }) => {
  return (
    <div className="center">
      <div className="main-game">
        <div className="main-symbol main-paper">
          <div className="paper-circle">
            <img src={paper} alt="paper" />
          </div>
        </div>

        <div className="main-symbol main-scissors">
          <div className="scissors-circle">
            <img src={scissors} alt="scissors" />
          </div>
        </div>

        <div className="main-symbol main-rock">
          <div className="rock-circle">
            <img src={rock} alt="rock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
