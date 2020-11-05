import React from "react";
import scissors from "../images/icon-scissors.svg";

const PlayScissors = ({
  children,
  addClassPlayer,
  addClassHousePicked,
  addClassCircleWin,
}) => {
  return (
    <>
      <div className="play-composant">
        <div className="picked">
          <p>You Picked</p>
        </div>
        <div className={`picked house-picked ${addClassHousePicked}`}>
          <p>The House Picked</p>
        </div>

        <div className={`play-symbol play-scissors ${addClassPlayer}`}>
          <div className={addClassCircleWin}></div>
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
