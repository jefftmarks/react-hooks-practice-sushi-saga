import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Form from "./Form";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => setSushis(sushiData.map(sushi => {
       return {...sushi, isEaten: false};
      })));
  }, [])

  function handleEatSushi(updatedSushi) {
    setEatenSushi([...eatenSushi, updatedSushi]);
    setBudget(budget - updatedSushi.price)
    setSushis(sushis.map(sushi => {
      if (sushi.id === updatedSushi.id) {
        return updatedSushi;
      }
      else return sushi;
    }))
  }

  function updateBudget(moneyRequest) {
    setBudget(parseInt(budget) + parseInt(moneyRequest));
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} budget={budget} />
      <Table plates={eatenSushi} budget={budget} />
      <Form updateBudget={updateBudget}/>
    </div>
  );
}

export default App;
