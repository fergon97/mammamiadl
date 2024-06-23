import React from "react";
import PropTypes from "prop-types";
import { usePizzaContext } from "../context/PizzaContext";
import Card from "../components/Card/Card";

const Home = ({ pizzas }) => {
  if (!pizzas) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <header>
        <h1>
          <span>Mamma Mía!</span>
        </h1>
        <h5>"Un pedazo de felicidad en cada mordida."
        </h5> 
     </header>

      <main>
        <h2>Todas nuestras pizzas son hechas con masa fresca</h2>
        <div className="menu-grid">
          {pizzas.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </main>
    </>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array,
};

export default () => {
  const { pizzas } = usePizzaContext();
  return <Home pizzas={pizzas} />;
};
