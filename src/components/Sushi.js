import React from "react";

function Sushi({sushi, onEatSushi, budget}) {

  function onClickSushi() {
    if (budget >= sushi.price && sushi.isEaten !== true) {
      fetch(`http://localhost:3001/sushis/${sushi.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({isEaten: true}),
      })
        .then(res => res.json())
        .then(updatedSushi => onEatSushi(updatedSushi));
    } else if (sushi.isEaten === true) {
      alert("You can't eat an empty plate!");
    } else if (budget < sushi.price) {
      alert("You don't have enough money!");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onClickSushi}>
        {sushi.isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={`${sushi.name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
