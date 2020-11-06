import React from "react";
import { paperImg, scissorsImg, rockImg } from "../images";

const PlayElement = ({
  children,
  moveLeftPlayer,
  moveHousePicked,
  addCircleWinPlayer,
  isPlayPaper,
  isPlayScissors,
}) => {
  let element;
  let img;
  if (isPlayPaper) {
    element = "paper";
    img = paperImg;
  } else if (isPlayScissors) {
    element = "scissors";
    img = scissorsImg;
  } else {
    element = "rock";
    img = rockImg;
  }
  return (
    <>
      <div className="play-composant">
        <div className="picked">
          <p>You Picked</p>
        </div>
        <div className={`picked house-picked ${moveHousePicked}`}>
          <p>The House Picked</p>
        </div>

        <div className={`play-symbol play-${element} ${moveLeftPlayer}`}>
          <div className={addCircleWinPlayer}></div>
          <div className="play-icon">
            <img src={img} alt={element} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default PlayElement;
