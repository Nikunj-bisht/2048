import React from "react";
import classes from '../styles/gameTile.module.css';



const GameTile = (props) => {
  const { val } = props;
  return (
    <div className={classes.gameRow}>
      {val.map((item) =>  <h4 className={item <= 4 ? classes.tile : classes.biggerTile}>{item}</h4>)}
    </div>
  );
};

export default GameTile;
