import { Movement } from "../Movement/Movement.ts";

export interface ExpenseProps {
  emitMovement: (movement: Movement) => void;
  currentExpenses: number;
  currentBalance: number;
}
