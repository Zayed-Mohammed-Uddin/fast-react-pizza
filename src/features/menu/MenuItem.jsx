import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import AddToCart from "../cart/AddToCart";
import DeleteItem from "../cart/DeleteItem";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../cart/cartSlice";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li id={id} className="flex gap-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 object-cover ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col gap-y-2">
        <p>{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        {!soldOut ? (
          <p className="text-sm">{formatCurrency(unitPrice)}</p>
        ) : (
          <p className="text-sm font-medium text-stone-500 uppercase">
            Sold out
          </p>
        )}
      </div>
      <div className="mt-auto mb-3 flex flex-col space-y-3 items-center justify-between">
        {!soldOut && (
            currentQuantity > 0 ? (
              <>
                <div className="flex items-center gap-2">
                  <Button
                    type="small"
                    onClick={() => dispatch(decreaseItemQuantity(id))}
                  >
                    -
                  </Button>
                  <span className="text-sm font-medium">{currentQuantity}</span>
                  <Button
                    type="small"
                    onClick={() => dispatch(increaseItemQuantity(id))}
                  >
                    +
                  </Button>
                </div>
                <DeleteItem pizzaId={id} />
              </>
            ) : (
              <AddToCart pizza={pizza} />
            )
        )}
      </div>
    </li>
  );
}

export default MenuItem;
