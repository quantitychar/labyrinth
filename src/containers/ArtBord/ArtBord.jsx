import React from "react";
import Labyrinth from "./components/Labirinth/Labirinth";
import Navigation from "./components/Navigation/Navigation";
import "./ArtBord.scss";

export const ArtBoard = ({ children }) => {
  return (
    <div className="art-board">
      <Labyrinth></Labyrinth>
      <Navigation />
    </div>
  );
};
export default ArtBoard;
