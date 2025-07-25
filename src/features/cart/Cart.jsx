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
        <Button
          to="/menu"
          className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        >
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
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Link to="/order/new" className="orderBtn">
          Order pizzas
        </Link>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
