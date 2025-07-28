import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { addItem } from "./slice/cartSlice";

function AddToCart({ pizza }) {
  const { id, name, unitPrice } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <Button type="small" onClick={handleAddToCart}>
      🛒 Add
    </Button>
  );
}

export default AddToCart;
