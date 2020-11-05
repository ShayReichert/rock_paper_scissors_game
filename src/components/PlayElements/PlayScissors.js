import React from "react";
import scissors from "../../images/icon-scissors.svg";

const PlayScissors = ({
  children,
  moveLeftPlayer,
  moveHousePicked,
  addCircleWinPlayer,
}) => {
  return (
    <>
      <div className="play-composant">
        <div className="picked">
          <p>You Picked</p>
        </div>
        <div className={`picked house-picked ${moveHousePicked}`}>
          <p>The House Picked</p>
        </div>

        <div className={`play-symbol play-scissors ${moveLeftPlayer}`}>
          <div className={addCircleWinPlayer}></div>
          <div className="play-icon">
            <img src={scissors} alt="scissors" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default PlayScissors;
