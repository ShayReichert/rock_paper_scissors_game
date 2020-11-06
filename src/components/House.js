import React, { useState } from "react";
import { paperImg, scissorsImg, rockImg } from "../images";

const House = ({
  isPlayRock,
  isPlayScissors,
  isPlayPaper,
  setScore,
  score,
  handleReset,
  setMoveLeftPlayer,
  setMoveHousePicked,
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
    fight(computerPlay);
  };

  const fight = (computerPlay) => {
    setTimeout(next, 700);
    let result;

    function next() {
      if (isPlayRock) {
        switch (computerPlay) {
          case "paperComputer":
            lose();
            break;
          case "scissorsComputer":
            win();
            break;
          case "rockComputer":
          default:
            result = "Match";
        }
      } else if (isPlayScissors) {
        switch (computerPlay) {
          case "paperComputer":
            win();
            break;
          case "rockComputer":
            lose();
            break;
          case "scissorsComputer":
          default:
            result = "Match";
        }
      } else if (isPlayPaper) {
        switch (computerPlay) {
          case "scissorsComputer":
            lose();
            break;
          case "rockComputer":
            win();
            break;
          case "paperComputer":
          default:
            result = "Match";
        }
      }

      function lose() {
        result = "You Lose";
        setScore(score - 1);
        setAddCircleWinComputer("circle-win");
      }
      function win() {
        result = "You Win";
        setScore(score + 1);
        setAddCircleWinPlayer("circle-win");
      }

      setFinalResults(result);
    }
  };

  function setFinalResults(result) {
    setResults(result);
    setMoveLeftPlayer("moveLeft");
    setMoveRightComputer("moveRight");
    setMoveHousePicked("move-picked");
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
