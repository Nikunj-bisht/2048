import React, { useEffect, useState } from "react";
import { getData as data, getData } from "../constants/matrix.js";
import GameTile from "./gameTile.jsx";
import {
  addWindowHelpers,
  fillRandomZero,
  checkForExit,
} from "../helpers/gameLogic.js";
import classes from "../styles/gameBoard.module.css";
const GameBoard = () => {
  const [gameData, setGameData] = useState(data());
  const [score, setScore] = useState(0);
  function changeBoardData(data) {
    setGameData(data.data);
    setScore((previous) => previous + data.sum);
    fillRandomZero(gameData);
    checkForExit(gameData);
  }

  useEffect(() => {
    addWindowHelpers(changeBoardData, gameData);
  }, []);
  return (
    <div className={classes.container}>
      {gameData.map((item) => {
        return <GameTile val={item} />;
      })}
      <div className={classes.score}>
        <h1>SCORE - {score}</h1>
      </div>
    </div>
  );
};

export default GameBoard;
