import React, { useState } from "react";
import { paperImg, scissorsImg, rockImg } from "../images";

const House = ({
  isPlayRock,
  isPlayScissors,
  isPlayPaper,
  setScore,
  score,
  setValue,
  handleReset,
  setMoveLeftPlayer,
  setMoveTitles,
  setAddCircleWinPlayer,
}) => {
  const [computerPlays, setComputerPlays] = useState("");
  const [results, setResults] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [moveRightComputer, setMoveRightComputer] = useState("");
  const [addCircleWinComputer, setAddCircleWinComputer] = useState("");

  const handleRandomResult = () => {
    const random = Math.floor(Math.random() * Math.floor(3));
    let computerPlay;

    switch (random) {
      case 0:
        computerPlay = "paperComputer";
        break;
      case 1:
        computerPlay = "scissorsComputer";
        break;
      case 2:
      default:
        computerPlay = "rockComputer";
    }

    setIsPlaying(false);
    setComputerPlays(computerPlay);
    whoWin(computerPlay);
  };

  const whoWin = (computerPlay) => {
    setTimeout(fight, 700);
    let result;

    function fight() {
      if (
        (isPlayRock && computerPlay === "scissorsComputer") ||
        (isPlayScissors && computerPlay === "paperComputer") ||
        (isPlayPaper && computerPlay === "rockComputer")
      ) {
        youWin();
      } else if (
        (isPlayRock && computerPlay === "paperComputer") ||
        (isPlayScissors && computerPlay === "rockComputer") ||
        (isPlayPaper && computerPlay === "scissorsComputer")
      ) {
        youLose();
      } else {
        result = "Draw";
      }

      function youLose() {
        result = "You Lose";
        setScore(score - 1);
        setAddCircleWinComputer("circle-win");
      }
      function youWin() {
        result = "You Win";
        setScore(score + 1);
        setAddCircleWinPlayer("circle-win");
      }
      setFinalResults(result);
    }
  };

  function setFinalResults(result) {
    setValue(score);
    setResults(result);
    setMoveLeftPlayer("moveLeft");
    setMoveRightComputer("moveRight");
    setMoveTitles("move-picked");
  }

  if (isPlaying) {
    setTimeout(handleRandomResult, 1000);
  }

  return (
    <>
      <div className={`circle-wait ${moveRightComputer}`}>
        <div className={addCircleWinComputer}></div>
        <div className={`dark-circle ${computerPlays}`}>
          {computerPlays === "paperComputer" ? (
            <img src={paperImg} alt="computer game" />
          ) : computerPlays === "scissorsComputer" ? (
            <img src={scissorsImg} alt="computer game" />
          ) : computerPlays === "rockComputer" ? (
            <img src={rockImg} alt="computer game" />
          ) : null}
        </div>
        {results && (
          <div className="replay">
            <p>{results}</p>
            <button onClick={handleReset}>Play Again</button>
          </div>
        )}
      </div>
    </>
  );
};

export default House;
