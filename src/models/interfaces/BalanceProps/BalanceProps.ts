import { Movement } from "../Movement/Movement.ts";

export interface BalanceProps {
  emitMovement: (movemente: Movement) => void;
  currentBalance: number;
}
