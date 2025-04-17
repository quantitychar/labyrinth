import React from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

const Navigation = ({
  size,
  onRefresh,
  onMapSize,
  onInputChange,
  inputRef,
}) => {
  return (
    <div className="art-board__navigation">
      <div className="art-board-item item--size">
        <Input
          inputRef={inputRef}
          type="number"
          onChange={onInputChange}
          value={size}
        />
        <Button onClick={onMapSize}>Map size</Button>
      </div>
      <div className="art-board-item">
        <Button onClick={onRefresh}>Refresh Map</Button>
      </div>
    </div>
  );
};

export default Navigation;
