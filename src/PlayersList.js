import React from "react";
import Player from "./Player";
import players from "./Players";
const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player) => (
        <Player
          name={player.name}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          imageUrl={player.imageUrl}
          team={player.team}
          age={player.age}
        />
      ))}
    </div>
  );
};

export default PlayersList;
