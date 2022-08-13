import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushis from "./Sushi";

function SushiContainer({sushis, onEatSushi, budget}) {
  const [count, setCount] = useState(0);
  const fourSushis = sushis.slice(count, count + 4);

  function updateSushiDisplay() {
    if (count === 96) {
      setCount(0);
    }
    else {
      setCount(count + 4);
    }
  }

  console.log(count);

  return (
    <div className="belt">
      {fourSushis.map(sushi => (
        <Sushis
          key={sushi.id}
          sushi={sushi}
          onEatSushi={onEatSushi}
          budget={budget}
        />
      ))}
      <MoreButton onClickMoreSushi={updateSushiDisplay}/>
    </div>
  );
}

export default SushiContainer;
