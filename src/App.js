import React, { useState } from "react";
import "./style/style.scss";

import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

import Header from "./components/Header";
import Main from "./components/Main";
import Attributions from "./components/Attributions";

import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

import useComputer from "./hooks/useComputer";
import PlayRock from "./components/PlayRock";
import PlayScissors from "./components/PlayScissors";
import PlayPaper from "./components/PlayPaper";

import House from "./components/House";

const App = () => {
  const { isOpen, handleToogle } = useModal();
  const [score, setScore] = useState(0);
  const [addClassPlayer, setAddClassPlayer] = useState("");
  const [addClassHousePicked, setAddClassHousePicked] = useState("");
  const [addClassCircleWin, setAddClassCircleWin] = useState("");

  const handleReset = () => {
    setAddClassCircleWin("");
    setAddClassHousePicked("");
    setAddClassPlayer("");
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
  } = useComputer();

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

        {/* Essayer de faire qu'un composant en créant une variable selon ce que le joueur joue */}
        {/* Voir si on peut utiliser .filter() */}
        {isPlayPaper && (
          <PlayPaper
            addClassPlayer={addClassPlayer}
            addClassHousePicked={addClassHousePicked}
            addClassCircleWin={addClassCircleWin}
          >
            <House
              isPlayRock={isPlayRock}
              isPlayScissors={isPlayScissors}
              isPlayPaper={isPlayPaper}
              setScore={setScore}
              score={score}
              handleReset={handleReset}
              setAddClassPlayer={setAddClassPlayer}
              setAddClassHousePicked={setAddClassHousePicked}
              setAddClassCircleWin={setAddClassCircleWin}
            />
          </PlayPaper>
        )}
        {isPlayScissors && (
          <PlayScissors
            addClassPlayer={addClassPlayer}
            addClassHousePicked={addClassHousePicked}
            addClassCircleWin={addClassCircleWin}
          >
            <House
              isPlayRock={isPlayRock}
              isPlayScissors={isPlayScissors}
              isPlayPaper={isPlayPaper}
              setScore={setScore}
              score={score}
              handleReset={handleReset}
              setAddClassPlayer={setAddClassPlayer}
              setAddClassHousePicked={setAddClassHousePicked}
              setAddClassCircleWin={setAddClassCircleWin}
            />
          </PlayScissors>
        )}
        {isPlayRock && (
          <PlayRock
            addClassPlayer={addClassPlayer}
            addClassHousePicked={addClassHousePicked}
            addClassCircleWin={addClassCircleWin}
          >
            <House
              isPlayRock={isPlayRock}
              isPlayScissors={isPlayScissors}
              isPlayPaper={isPlayPaper}
              setScore={setScore}
              score={score}
              handleReset={handleReset}
              setAddClassPlayer={setAddClassPlayer}
              setAddClassHousePicked={setAddClassHousePicked}
              setAddClassCircleWin={setAddClassCircleWin}
            />
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
