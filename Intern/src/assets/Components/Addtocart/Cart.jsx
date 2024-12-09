import styled from "styled-components";

const Cart = ({ cart, updateQuantity, removeItem }) => {
  return (
    <CartContainer>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id}>
            <p>{item.name} - ${item.price}</p>
            <div className="quantity">
              <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
            </div>
            <button className="remove" onClick={() => removeItem(item.id)}>
              Remove Item
            </button>
          </CartItem>
        ))
      )}
      <TotalPrice>
        Total Price: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </TotalPrice>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.section`
  padding: 50px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;

  .quantity {
    display: flex;
    align-items: center;

    button {
      background-color: #f0f0f0;
      border: none;
      padding: 5px;
      margin: 0 5px;
      cursor: pointer;
    }

  
  }

  .remove {
    background-color: red;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
