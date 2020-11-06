import { useState } from "react";

const HandlePlayerChoice = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayPaper, setIsPlayPaper] = useState(false);
  const [isPlayScissors, setIsPlayScissors] = useState(false);
  const [isPlayRock, setIsPlayRock] = useState(false);

  const playPaper = () => {
    setIsPlayPaper(true);
    setIsPlay(true);
  };
  const playScissors = () => {
    setIsPlayScissors(true);
    setIsPlay(true);
  };
  const playRock = () => {
    setIsPlayRock(true);
    setIsPlay(true);
  };

  const reset = () => {
    setIsPlayRock(false);
    setIsPlayScissors(false);
    setIsPlayPaper(false);
    setIsPlay(false);
  };

  return {
    isPlay,
    playPaper,
    isPlayPaper,
    playScissors,
    isPlayScissors,
    playRock,
    isPlayRock,
    reset,
  };
};

export default HandlePlayerChoice;
