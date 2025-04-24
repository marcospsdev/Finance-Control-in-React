import "./App.css";
import Header from "./components/Header/Header.tsx";
import FinanceControl from "./components/FinanceControl/FinanceControl.tsx";
import { useState } from "react";
import { Movement } from "./models/interfaces/Movement/Movement.ts";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); // State de saldo atual
  const [currentExpenses, setCurrentExpenses] = useState(0); // State de despesas atual
  const [movementsItens, setMovementsItens] = useState<Array<Movement>>([]); // State de movimentações

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setMovementsItens((prevMovements) => {
        const movements = [...prevMovements];
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        });
        return movements;
      });

      movement.type === "Input" &&
        setCurrentBalance(
          (prevBalance) => prevBalance + Number(movement.value),
        );

      if (movement.type === "Output") {
        setCurrentExpenses(
          (prevExpenses) => prevExpenses + Number(movement.value),
        );

        currentBalance > 0 &&
          setCurrentBalance(
            (prevBalance) => prevBalance - Number(movement.value),
          );
      }
    }
  };

  return (
    <div>
      <Header />
      <FinanceControl
        balance={currentBalance}
        expenses={currentExpenses}
        handleSetMovement={setNewMovement}
      />
    </div>
  );
}

export default App;
