import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";
import CartOverview from "../features/cart/CartOverview";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}
      <Header />

      <div className="mb-6 overflow-y-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
      <Footer />
    </div>
  );
}

export default AppLayout;
