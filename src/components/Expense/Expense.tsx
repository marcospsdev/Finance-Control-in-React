import { ExpenseProps } from "../../models/interfaces/ExpenseProps/ExpenseProps.ts";
import { useState } from "react";
import "./Expense.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button.tsx";
import * as React from "react";

const Expense = ({
  emitMovement,
  currentExpenses,
  currentBalance,
}: ExpenseProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleRenderInputForm = () => setRenderInputForm(!false);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputValue.trim().length === 0) {
      setIsFormValid(false);
      return;
    }

    if (currentBalance >= Number(inputValue)) {
      hideInputForm();
      emitMovement({ name: inputName, value: inputValue, type: "Output" });
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    inputName.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
    setInputName(eventValue);
  };

  const handleInputValueForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    inputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
    setInputValue(eventValue);
  };

  return (
    <div>
      <div className="expense_container">
        <div className="expense_card">
          <header className="expense_header">
            <FontAwesomeIcon icon={faPercent} color="#E43F4d" size="2x" />
            <h2>Despesas</h2>
          </header>
          <h3>{currentExpenses > 0 ? currentExpenses : "R$ 0"}</h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Saída"
              priority="Output"
              disable={currentBalance === 0}
            />
          )}

          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <div
                className={`input_form_container ${!isFormValid ? "invalid" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Nome"
                  className="expense_input"
                  value={inputName}
                  onChange={handleInputNameForm}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className="expense_input"
                  value={inputValue}
                  onChange={handleInputValueForm}
                />
              </div>
              <div className="actions_form_buttons_container">
                <Button
                  title="Cancelar"
                  priority="Output"
                  action={hideInputForm}
                />
                <Button type="submit" title="Adicionar" priority="Input" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expense;
