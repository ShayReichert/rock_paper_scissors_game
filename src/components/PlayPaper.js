import React from "react";
import paper from "../images/icon-paper.svg";

const PlayPaper = ({
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

        <div className={`play-symbol play-paper ${addClassPlayer}`}>
          <div className={addClassCircleWin}></div>
          <div className="play-icon">
            <img src={paper} alt="paper" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default PlayPaper;
