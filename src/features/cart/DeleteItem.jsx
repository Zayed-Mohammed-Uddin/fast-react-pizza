import { useDispatch } from "react-redux";
import { deleteItem } from "./slice/cartSlice";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="delete" onClick={() => dispatch(deleteItem(pizzaId))}>
      🚫 Delete
    </Button>
  );
}

export default DeleteItem;
