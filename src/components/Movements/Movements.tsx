import { MovementsProps } from "../../models/interfaces/MovementsProps/MovementsProps.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import "./Movements.css";

const Movements = ({ movementsList }: MovementsProps) => {
  return (
    <>
      <header className="movements_header">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="#7af1a7" size="2x" />
        <h2>{`${movementsList.length > 0 ? "Movimentações" : "Sem movimentações a exibir!"} `}</h2>
      </header>

      {movementsList.length > 0 &&
        movementsList.map((movement) => (
          <div key={movement.id} className="movimentations_container">
            <div className="movimentation">
              <h2>{movement.name}</h2>
              <h3
                className={`${movement.type === "Input" ? "balance_btn" : "expense_btn"}`}
              >
                {movement.type === "Input" ? "+ " : "- "}
                {movement.value}
              </h3>
            </div>
          </div>
        ))}
    </>
  );
};

export default Movements;
