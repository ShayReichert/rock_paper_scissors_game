import React, { useState, useEffect } from "react";
import "./style/style.scss";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

import HandlePlayerChoice from "./components/HandlePlayerChoice";
import Header from "./components/Header";
import Main from "./components/Main";
import Attributions from "./components/Attributions";

import PlayElement from "./components/PlayElement";
import House from "./components/House";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [score, setScore] = useState(0);
  const [moveLeftPlayer, setMoveLeftPlayer] = useState("");
  const [moveTitles, setMoveTitles] = useState("");
  const [addCircleWinPlayer, setAddCircleWinPlayer] = useState("");

  const { storedValue, setValue } = useLocalStorage("score", score);
  const { isOpen, handleToogle } = useModal();
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

  const handleReset = () => {
    setValue(score);
    setAddCircleWinPlayer("");
    setMoveTitles("");
    setMoveLeftPlayer("");
    reset();
  };

  useEffect(() => {
    storedValue ? setScore(storedValue) : setScore(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              moveTitles={moveTitles}
              addCircleWinPlayer={addCircleWinPlayer}
            >
              <House
                isPlayRock={isPlayRock}
                isPlayScissors={isPlayScissors}
                isPlayPaper={isPlayPaper}
                setScore={setScore}
                score={score}
                setValue={setValue}
                handleReset={handleReset}
                setMoveLeftPlayer={setMoveLeftPlayer}
                setMoveTitles={setMoveTitles}
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
