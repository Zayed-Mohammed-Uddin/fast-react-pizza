import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantityById,
} from "./cartSlice";
import { useSelector } from "react-redux";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            type="small"
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
          >
            -
          </Button>
          <span className="text-sm font-medium">{currentQuantity}</span>
          <Button
            type="small"
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}
          >
            +
          </Button>
          <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
