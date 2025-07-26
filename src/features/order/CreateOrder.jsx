import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const { username } = useSelector((state) => state.user);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (cart.length === 0) {
    return (
      <div className="my-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">Your cart is empty!</h1>
        <p>Add some delicious pizzas to your cart first.</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Ready to order? Let's go!
      </h1>

      <div className="mb-6 text-center">
        <p className="text-lg font-semibold">
          Total: ${totalCartPrice.toFixed(2)}
        </p>
      </div>

      {formErrors?.errors?.general && (
        <p className="error mb-4 text-center">⚠️ {formErrors.errors.general}</p>
      )}

      <Form
        method="POST"
        className="flex flex-col items-center justify-center gap-y-6"
      >
        <div>
          <label htmlFor="customer">First Name</label>
          <input
            type="text"
            id="customer"
            name="customer"
            defaultValue={username}
            required
            className="orderInput"
          />
          {formErrors?.errors?.customer && (
            <p className="error">⚠️ {formErrors.errors.customer}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="orderInput"
          />
          {formErrors?.errors?.phone && (
            <p className="error">⚠️ {formErrors.errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="orderInput"
          />
          {formErrors?.errors?.address && (
            <p className="error">⚠️ {formErrors.errors.address}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            disabled={isSubmitting}
            type="order"
            htmlType="submit"
          >
            {isSubmitting ? "Ordering..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
