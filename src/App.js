import React from "react";
import "./style/style.scss";

import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

import Header from "./components/Header";
import Main from "./components/Main";
import Attributions from "./components/Attributions";

import triangle from "./images/bg-triangle.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

// import PlayerVsComputer from "./components/PlayerVsComputer";

const App = () => {
  const { isOpen, handleToogle } = useModal();
  // const { isPlay, handleClick } = useComputer();

  return (
    <>
      <div className="main">
        {/* Score Rules You Picked The House Picked You Win You Lose Play Again */}
        <Header score="12" />
        <Main
          triangle={triangle}
          paper={paper}
          scissors={scissors}
          rock={rock}
          // onClick={handleClick}
          // isPlay={isPlay}
        />
        {/* <PlayerVsComputer /> */}
        <div className="rules-btn">
          <button onClick={handleToogle}>Rules</button>
        </div>
        <Modal isOpen={isOpen} close={handleToogle} />
        <Attributions name="Shay Reichert" />
      </div>
    </>
  );
};

export default App;
