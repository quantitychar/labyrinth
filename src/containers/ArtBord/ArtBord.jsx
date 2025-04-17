import React, { useState, useRef } from "react";
import Labyrinth from "./components/Labirinth/Labirinth";
import Navigation from "./components/Navigation/Navigation";
import Row from "../../components/Row/Row";
import Space from "../../components/Space/Space";
import Wall from "../../components/Wall/Wall";

import { mapGeneration } from "../../helper/mapGenerative";

import "./ArtBord.scss";

export const ArtBoard = () => {
  const [size, setSize] = useState(15);
  const [map, setMap] = useState(mapGeneration(size));
  const inputRef = useRef(0);

  const mapRender = function (mapLabyrinth) {
    return mapLabyrinth.map((row, indexRow) => {
      return (
        <Row key={`id-${indexRow}`}>
          {row.map((value, indexCall) =>
            value === 1 ? (
              <Space key={`id-${indexCall}`} y={indexRow} x={indexCall} />
            ) : (
              <Wall key={`id-${indexCall}`} y={indexRow} x={indexCall} />
            )
          )}
        </Row>
      );
    });
  };
  // const mapItems = mapGeneration(5)
  // console.log('mapItems',mapItems);
  // console.log('mapRender',mapRender(map));

  const handleInputChange = function () {
    setSize(Number(inputRef.current.value));
  };

  const handleRefresh = function () {
    setMap(mapGeneration(size));
  };

  const handleMapSize = function () {
    setMap(mapGeneration(size));
  };

  return (
    <div className="art-board">
      <Labyrinth>{mapRender(map)}</Labyrinth>
      <Navigation
        size={size}
        inputRef={inputRef}
        onRefresh={handleRefresh}
        onMapSize={handleMapSize}
        onInputChange={handleInputChange}
      />
    </div>
  );
};
export default ArtBoard;
