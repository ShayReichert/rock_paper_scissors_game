import React from "react";
import rock from "../images/icon-rock.svg";

const PlayRock = ({
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

        <div className={`play-symbol play-rock ${addClassPlayer}`}>
          <div className={addClassCircleWin}></div>
          <div className="play-icon">
            <img src={rock} alt="rock" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default PlayRock;
