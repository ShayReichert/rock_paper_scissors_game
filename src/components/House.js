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
  setAddClassPlayer,
  setAddClassHousePicked,
  setAddClassCircleWin,
}) => {
  const [computerPlays, setComputerPlays] = useState("");
  const [results, setResults] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [addClassComputer, setAddClassComputer] = useState("");
  const [addClassCircleWinComputer, setAddClassCircleWinComputer] = useState(
    ""
  );

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
            setAddClassCircleWinComputer("circle-win");
            break;
          case "scissorsComputer":
            result = "You Win";
            setScore(score + 1);
            setAddClassCircleWin("circle-win");
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
            setAddClassCircleWin("circle-win");
            break;
          case "scissorsComputer":
            result = "Match";
            break;
          case "rockComputer":
            result = "You Lose";
            setScore(score - 1);
            setAddClassCircleWinComputer("circle-win");
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
            setAddClassCircleWinComputer("circle-win");
            break;
          case "rockComputer":
            result = "You Win";
            setScore(score + 1);
            setAddClassCircleWin("circle-win");
            break;
          default:
            result = "Match";
        }
      }
      setResults(result);
      setAddClassPlayer("moveLeft");
      setAddClassComputer("moveRight");
      setAddClassHousePicked("move-picked");
    }
  };

  if (isPlaying) {
    setTimeout(handleRandomResult, 1000);
  }

  const paperDisplay = computerPlays === "paperComputer";
  const scissorsDisplay = computerPlays === "scissorsComputer";
  const rockDisplay = computerPlays === "rockComputer";
  return (
    <>
      <div className={`circle-wait ${addClassComputer}`}>
        <div className={addClassCircleWinComputer}></div>
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
