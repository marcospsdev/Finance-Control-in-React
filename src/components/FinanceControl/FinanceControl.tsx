import "./FinanceControl.css";
import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps.ts";
import { Movement } from "../../models/interfaces/Movement/Movement.ts";
import Balance from "../Balance/Balance.tsx";
import Expense from "../Expense/Expense.tsx";

const FinanceControl = ({
  handleSetMovement,
  balance,
  expenses,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement);
  };
  return (
    <div className="container_finances">
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      <Expense
        currentBalance={balance}
        currentExpenses={expenses}
        emitMovement={receiveNewMovement}
      />
    </div>
  );
};

export default FinanceControl;
