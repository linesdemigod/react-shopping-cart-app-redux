import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, removeItemFromCart } from "../features/action";
import CartItems from "./../components/CartItems";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.carts.carts);
  const loading = useSelector(state => state.loading);
  const subtotals = items.map(item => item.price * item.quantity);
  const total = subtotals.reduce((acc, curr) => acc + curr, 0).toFixed(2);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleRemoveFromCart = id => {
    if (window.confirm("Are you sure to remove this product?")) {
      dispatch(removeItemFromCart(id));
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-3xl font-bold">Cart Items</h1>
      {loading ? (
        <div>Loading...</div>
      ) : items && items.length > 0 ? (
        <div className="mt-3">
          {items.map(item => (
            <CartItems
              key={item.id}
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
          <div className="mt-3" key={total.key}>
            <p className="text-xl fontsemi-bold"> Total: $ {total}</p>
          </div>
        </div>
      ) : (
        <div className="text-center">No Item in the cart</div>
      )}
    </div>
  );
}

export default Cart;
