import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

function AddToCart({ pizza }) {
  const { id, name, unitPrice } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

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

  if (isInCart) {
    return (
      <Button type="button">
        In cart ({currentQuantity})
      </Button>
    );
  }

  return (
    <Button type="small" onClick={handleAddToCart}>
      Add to cart
    </Button>
  );
}

export default AddToCart;
