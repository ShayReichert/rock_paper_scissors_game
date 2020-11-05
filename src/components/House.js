import React, { useState } from "react";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

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
    let computerPlay = "";
    switch (random) {
      case 0:
        computerPlay = "paperComputer";
        break;
      case 1:
        computerPlay = "scissorsComputer";
        break;
      case 2:
        computerPlay = "rockComputer";
        break;
      default:
        computerPlay = "rockComputer";
    }
    setIsPlaying(false);
    setComputerPlays(computerPlay);
    fight(computerPlay);
    return computerPlay;
  };

  const fight = (computerPlay) => {
    setTimeout(next, 700);
    let result = "";
    function next() {
      if (isPlayRock) {
        switch (computerPlay) {
          case "paperComputer":
            result = "You Lose";
            setScore(score - 1);
            setAddCircleWinComputer("circle-win");
            break;
          case "scissorsComputer":
            result = "You Win";
            setScore(score + 1);
            setAddCircleWinPlayer("circle-win");
            break;
          case "rockComputer":
            result = "Match";
            break;
          default:
            result = "Match";
        }
      } else if (isPlayScissors) {
        switch (computerPlay) {
          case "paperComputer":
            result = "You Win";
            setScore(score + 1);
            setAddCircleWinPlayer("circle-win");
            break;
          case "scissorsComputer":
            result = "Match";
            break;
          case "rockComputer":
            result = "You Lose";
            setScore(score - 1);
            setAddCircleWinComputer("circle-win");
            break;
          default:
            result = "Match";
        }
      } else if (isPlayPaper) {
        switch (computerPlay) {
          case "paperComputer":
            result = "Match";
            break;
          case "scissorsComputer":
            result = "You Lose";
            setScore(score - 1);
            setAddCircleWinComputer("circle-win");
            break;
          case "rockComputer":
            result = "You Win";
            setScore(score + 1);
            setAddCircleWinPlayer("circle-win");
            break;
          default:
            result = "Match";
        }
      }
      setResults(result);
      setMoveLeftPlayer("moveLeft");
      setMoveRightComputer("moveRight");
      setMoveHousePicked("move-picked");
    }
  };

  if (isPlaying) {
    setTimeout(handleRandomResult, 1000);
  }

  // Display computer choice's logo
  const paperDisplay = computerPlays === "paperComputer";
  const scissorsDisplay = computerPlays === "scissorsComputer";
  const rockDisplay = computerPlays === "rockComputer";

  return (
    <>
      <div className={`circle-wait ${moveRightComputer}`}>
        <div className={addCircleWinComputer}></div>
        <div className={`dark-circle ${computerPlays}`}>
          {paperDisplay && <img src={paper} alt="computer game" />}
          {scissorsDisplay && <img src={scissors} alt="computer game" />}
          {rockDisplay && <img src={rock} alt="computer game" />}
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
