function Cart({ cart }) {
  return (
    <div>
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;