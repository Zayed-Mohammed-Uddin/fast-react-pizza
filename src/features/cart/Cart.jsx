import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { getCart, clearCart } from "./cartSlice";

function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="px-4 py-3">
        <Button to="/menu" type="primary">
          &larr; Back to menu
        </Button>

        <p className="mt-7 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-3">
      <Button
        to="/menu"
        type="small"
      >
        &larr; Back to menu
      </Button>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="order">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
