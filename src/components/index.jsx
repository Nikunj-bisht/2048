import React, { useEffect, useState } from "react";
import { getData as data, getData } from "../constants/matrix.js";
import GameTile from "./gameTile.jsx";
import { addWindowHelpers } from "../helpers/gameLogic.js";
import classes from "../styles/gameBoard.module.css";
const GameBoard = () => {
  const [gameData, setGameData] = useState(data());
  const [score, setScore] = useState(0);
  function changeBoardData(data) {
    setGameData(data.data);
    setScore((previous) => previous + data.sum);
    fillRandomZero();
    checkForExit()
  }
  async function checkForExit(){
       for(let i = 0;i<3;i++){
         let str = "";
         for(let j = 0;j<3;j++){
           str+=gameData[i][j];
           if(str.includes("2048")){
             alert("Game over")
             return;
           }  
         }
       }
       for(let i = 0;i<3;i++){
        let str = "";
        for(let j = 0;j<3;j++){
          str+=gameData[j][i];
          if(str.includes("2048")){
            alert("Game over")
            return;
          }  
        }
      }
  }
  //   useEffect(()=>{
  //     fillRandomZe ro();

  //   },[]);
  function findZeroIndexes() {
    const zeroIndices = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let value = gameData[i][j];
        if (value === 0) {
          zeroIndices.push([i, j]);
        }
      }
    }

    return zeroIndices;
  }
  function fillRandomCells() {
    const randomIndex1 = Math.floor(Math.random() * gameData.length);
    const randomIndex2 = Math.floor(Math.random() * gameData.length);
    const randomIndex3 = Math.floor(Math.random() * gameData.length);
    const randomIndex4 = Math.floor(Math.random() * gameData.length);
    
    let num = [2, 4];
    let fillNumber = Math.floor(Math.random() * 2);
    let newData = getData();
    console.log(newData,'nd')
    newData[randomIndex1][randomIndex2] = num[fillNumber];
    newData[randomIndex3][randomIndex4] = num[fillNumber];

    setGameData(newData);
    addWindowHelpers(changeBoardData, newData);

  }
  function fillRandomZero() {
    let zeroIndices = findZeroIndexes();
    if (zeroIndices.length === 0) {
      alert("Game Over");
      return;
    }
    const randomIndex = Math.floor(Math.random() * zeroIndices.length);
    let num = [2, 4];
    let fillNumber = Math.floor(Math.random() * 2);
    let newData = [...gameData];
    newData[zeroIndices[randomIndex][0]][zeroIndices[randomIndex][1]] =
      num[fillNumber];
  }
  useEffect(() => {
    addWindowHelpers(changeBoardData, gameData);
    // fillRandomCells();
  }, []);
  return (
    <div className={classes.container}>
      {gameData.map((item) => {
        return <GameTile val={item} />;
      })}
      <div className={classes.score}>
        <h1>SCORE - {score}</h1>
        {/* <button
          title="Restart"
          onClick={() => {
          }}
        >
          Restart
        </button> */}
      </div>
    </div>
  );
};

export default GameBoard;
