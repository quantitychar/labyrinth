import React from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

const Navigation = () => {
  return (
    <div className="art-board__navigation">
      <div className="art-board-item item--size">
        <Input type="number" value="15" />
        <Button>Map size</Button>
      </div>
      <div className="art-board-item">
        <Button>Refresh Map</Button>
      </div>
    </div>
  );
};

export default Navigation;
