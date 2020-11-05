import React, { useState } from "react";
import "./style/style.scss";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

import HandlePlayerChoice from "./components/HandlePlayerChoice";
import Header from "./components/Header";
import Main from "./components/Main";
import Attributions from "./components/Attributions";

import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

import { PlayRock, PlayScissors, PlayPaper } from "./components/PlayElements";
import House from "./components/House";

const App = () => {
  const { isOpen, handleToogle } = useModal();
  const [score, setScore] = useState(0);
  const [moveLeftPlayer, setMoveLeftPlayer] = useState("");
  const [moveHousePicked, setMoveHousePicked] = useState("");
  const [addCircleWinPlayer, setAddCircleWinPlayer] = useState("");

  const handleReset = () => {
    setAddCircleWinPlayer("");
    setMoveHousePicked("");
    setMoveLeftPlayer("");
    reset();
  };

  const {
    isPlay,
    playPaper,
    isPlayPaper,
    playScissors,
    isPlayScissors,
    playRock,
    isPlayRock,
    reset,
  } = HandlePlayerChoice();

  const houseComponent = (
    <House
      isPlayRock={isPlayRock}
      isPlayScissors={isPlayScissors}
      isPlayPaper={isPlayPaper}
      setScore={setScore}
      score={score}
      handleReset={handleReset}
      setMoveLeftPlayer={setMoveLeftPlayer}
      setMoveHousePicked={setMoveHousePicked}
      setAddCircleWinPlayer={setAddCircleWinPlayer}
    />
  );

  return (
    <>
      <div className="main">
        <Header score={score} />
        {!isPlay && (
          <Main
            paper={paper}
            scissors={scissors}
            rock={rock}
            playPaper={playPaper}
            playScissors={playScissors}
            playRock={playRock}
          />
        )}

        {isPlayPaper && (
          <PlayPaper
            moveLeftPlayer={moveLeftPlayer}
            moveHousePicked={moveHousePicked}
            addCircleWinPlayer={addCircleWinPlayer}
          >
            {houseComponent}
          </PlayPaper>
        )}
        {isPlayScissors && (
          <PlayScissors
            moveLeftPlayer={moveLeftPlayer}
            moveHousePicked={moveHousePicked}
            addCircleWinPlayer={addCircleWinPlayer}
          >
            {houseComponent}
          </PlayScissors>
        )}
        {isPlayRock && (
          <PlayRock
            moveLeftPlayer={moveLeftPlayer}
            moveHousePicked={moveHousePicked}
            addCircleWinPlayer={addCircleWinPlayer}
          >
            {houseComponent}
          </PlayRock>
        )}

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
