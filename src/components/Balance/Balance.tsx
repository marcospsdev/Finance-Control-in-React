import { useState } from "react";
import { BalanceProps } from "../../models/interfaces/BalanceProps/BalanceProps.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Balance.css";
import Button from "../Button/Button.tsx";
import * as React from "react";

const Balance = ({ emitMovement, currentBalance }: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
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

    hideInputForm();
    emitMovement({
      name: inputName,
      value: inputValue,
      type: "Input",
    });
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
      <div className="balance_container">
        <div className="balance_card">
          <header className="balance_header">
            <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x" />
            <h2>Saldo</h2>
          </header>

          <h3> {currentBalance > 0 ? currentBalance : "R$ 0"} </h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Entrada"
              priority="Input"
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
                  className="balance_input"
                  value={inputName}
                  onChange={handleInputNameForm}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className="balance_input"
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
                <Button title="Adicionar" priority="Input" type="submit" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
