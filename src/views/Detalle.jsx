import React from "react";
import { Link, useParams } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { usePizzaContext } from "../context/PizzaContext";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, formatearPrecio, añadirAlCarrito } = usePizzaContext();
  const pizza = pizzas.find((item) => item.id === id);

  if (!pizza) {
    return <div>Pizza not found!</div>;
  }

  const { name, desc, img, price, ingredients } = pizza;

  return (
    <main>
      <section className="card details-layout">
        <div className="details-img">
          <img src={img} alt={name} />
        </div>

        <div className="details-body">
          <h1 className="card-title">{name}</h1>
          <p>{desc}</p>

          <div>
            <h2>Ingredientes:</h2>
            <ul className="ingredient-list">
              {ingredients.map((item, index) => (
                <li key={index} className="list-item">
                  &bull; {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="details-footer">
            <h3>Precio: {formatearPrecio(price)}</h3>
            <button onClick={() => añadirAlCarrito(pizza)} className="btn">
              <HiOutlineShoppingCart aria-hidden="true" /> Agregar al carrito
            </button>
            <Link to="/" className="btn" style={{ textDecoration: "none" }}>
              Regresar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detalle;
