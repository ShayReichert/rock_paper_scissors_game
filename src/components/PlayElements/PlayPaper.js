import React from "react";
import paper from "../../images/icon-paper.svg";

const PlayPaper = ({
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

        <div className={`play-symbol play-paper ${moveLeftPlayer}`}>
          <div className={addCircleWinPlayer}></div>
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
