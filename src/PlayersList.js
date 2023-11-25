import React from "react";
import Player from "./Player";
import players from "./Players";
const PlayersList = () => {
  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
