import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Contexto } from "../components/Contexto";
import Navbar from "../components/Navbar";

const Detalle = () => {
  const [pizzaDetail, setPizzaDetail] = useState({});
  const { pizzas, addToCart } = useContext(Contexto);
  const { id } = useParams();
  console.log(pizzas);
  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);

    setPizzaDetail(datosPizza || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="cajita">
          <div className="fotito">
            <img src={pizzaDetail.img} alt="" />
          </div>
          <div className="textito">
            <h5>{pizzaDetail.name}</h5>
            <p>{pizzaDetail.desc}</p>
            <ul>
              {pizzaDetail.ingredients?.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <div className="precito">
              <h4>Precio: ${pizzaDetail.price}</h4>
              <button
                className="botonCarro"
                onClick={() => addToCart(pizzaDetail)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
