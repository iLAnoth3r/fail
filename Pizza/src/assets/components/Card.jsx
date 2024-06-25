import { useContext } from "react";
import { Contexto } from "./Contexto";
import { formatoNumero } from "./formatoNumero";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { pizzas } = useContext(Contexto);
  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
        <div className="cuerpo" key={pizza.id}>
          <div className="tarjeta">
            <img className="foto" src={pizza.img} alt="" />
            <div className="caja">
              <h3 className="nombre">Pizza {pizza.name}</h3>
              <hr />
              <p className="texto">
                <b>Ingredientes:</b>
              </p>
              <ul className="ul">
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <h2 className="precio">Precio: ${formatoNumero(pizza.price)}</h2>
            <div className="botones">
              <button
                to={`pizza/${pizza.id}`}
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
              >
                Ver Más
              </button>
              <button>Añadir</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
