import React, { useState } from "react";
import "./style/style.scss";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

import HandlePlayerChoice from "./components/HandlePlayerChoice";
import Header from "./components/Header";
import Main from "./components/Main";
import Attributions from "./components/Attributions";

import PlayElement from "./components/PlayElement";
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

  return (
    <>
      <div className="main">
        <Header score={score} />
        {!isPlay && (
          <Main
            playPaper={playPaper}
            playScissors={playScissors}
            playRock={playRock}
          />
        )}
        {isPlay && (
          <>
            <PlayElement
              isPlayScissors={isPlayScissors}
              isPlayPaper={isPlayPaper}
              moveLeftPlayer={moveLeftPlayer}
              moveHousePicked={moveHousePicked}
              addCircleWinPlayer={addCircleWinPlayer}
            >
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
            </PlayElement>
          </>
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
