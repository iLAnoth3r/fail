import { createContext, useState, useEffect } from "react";

export const Contexto = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const response = await fetch("pizzas/pizzas.json");
    const pizzas = await response.json();
    setPizzas(pizzas);
  };

  return (
    <Contexto.Provider value={{ pizzas, setPizzas }}>
      {children}
    </Contexto.Provider>
  );
};

export default PizzasProvider;
