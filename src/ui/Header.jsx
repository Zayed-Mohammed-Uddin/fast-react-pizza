import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/user/User";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-wider font-bold">
        Pizza Ordering App
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}

export default Header;
