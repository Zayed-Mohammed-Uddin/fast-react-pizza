import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import AddToCart from "../cart/AddToCart";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li id={id} className="flex gap-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 object-cover ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col gap-y-1">
        <p>{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between mb-3">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}

          {!soldOut && <AddToCart pizza={pizza} />}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
