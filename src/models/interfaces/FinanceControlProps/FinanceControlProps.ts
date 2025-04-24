import { Movement } from "../Movement/Movement.ts";

export interface FinanceControlProps {
  handleSetMovement: (movement: Movement) => void;
  balance: number;
  expenses: number;
}
