

import { getBasketTotal } from "../../utils/Reducer";
import { useStateValue } from "../../utils/Provider";
import { Link } from "react-router-dom";
import style from "./Index.module.scss";

// function Subtotale({ id }) {
function Subtotal() {
  const [{ basket }] = useStateValue();

  // const [{ basket }, dispatch] = useStateValue();
  // const svuotacart = () => {
  //   dispatch({
  //     type: "SVUOTA-CARRELLO",
  //     id,
  //   });
  // };

  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };
  return (
    <div className={style.Subtotale}>
      {getTotalItems() === 1 ? (
        <p>
          Subtotale ({getTotalItems()} oggetto):{" "}
          <strong>{getBasketTotal(basket)} €</strong>
        </p>
      ) : (
        <p>
          Subtotale ({getTotalItems()} oggetti):{" "}
          <strong>{getBasketTotal(basket)} €</strong>
        </p>
      )}

      <div>
        <input type="checkbox" /> Questo ordine contiene un regalo
      </div>

      <Link to="/sommario">
        <button
          disabled={getTotalItems() === 0}
          className={style.SubBTN}
        >
          Procedi all'acquisto
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;