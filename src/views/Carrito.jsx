import React from "react";
import { usePizzaContext } from "../context/PizzaContext";
import { TiPlus, TiMinus } from "react-icons/ti";

const Carrito = () => {
  const { carrito, añadirAlCarrito, removerDelCarrito, formatearPrecio } =
    usePizzaContext() || {};

  return (
    <main>
      <section className="cart card card-body">
        <h1 className="ch">Mi carrito</h1>
        {!carrito || !carrito.items.length ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <ul className="cart-list">
              {carrito.items.map((item) => (
                <li key={item.id}>
                  <div className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{formatearPrecio(item.precio * item.cantidad)}</p>
                    </div>
                  </div>

                  <div className="cart-item-buttons">
                    <button
                      onClick={() => removerDelCarrito(item)}
                      aria-label="Remover del carrito"
                    >
                      <TiMinus aria-hidden="true" />
                    </button>
                    <p className="cantidad">{item.cantidad}</p>
                    <button
                      onClick={() => añadirAlCarrito(item)}
                      aria-label="Agregar al carrito"
                    >
                      <TiPlus aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <h2>Total: {formatearPrecio(carrito.total)}</h2>
              <button className="btn">Ir a pagar</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Carrito;
