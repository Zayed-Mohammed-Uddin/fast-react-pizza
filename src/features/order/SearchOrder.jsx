import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function SearchOrder() {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) {
      alert("Please enter an order ID");
      return;
    }

    navigate(`/order/${orderId}`);
    setOrderId("");
  };
  return (
    <form className="relative flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter order ID"
        value={orderId}
        name="text"
        onChange={(e) => setOrderId(e.target.value)}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 transition-all duration-200 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-48 sm:focus:w-72"
      />
      <Button type="search" htmlType="submit">🔎</Button>
    </form>
  );
}

export default SearchOrder;
