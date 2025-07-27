import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}
      <Header />

      <div className="overflow-y-auto mb-6">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
