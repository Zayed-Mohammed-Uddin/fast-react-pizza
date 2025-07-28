import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-2">
      <div className="flex items-center justify-between">
        <p className="flex flex-col items-center justify-start font-bold">
          <span className="block w-full">
            {quantity}&times; {name}
          </span>
          {isLoadingIngredients && (
            <span className="text-stone-400 italic">Loading...</span>
          )}
          {ingredients && (
            <span className="text-sm text-stone-400 capitalize italic">
              {" "}
              {ingredients.map((ing) => ing).join(", ")}
            </span>
          )}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
