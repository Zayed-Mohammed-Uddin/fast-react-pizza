import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const { username } = useSelector((state) => state.user);
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 space-y-2 text-xl font-semibold">
        <p className="text-4xl tracking-wider uppercase">The best pizza.</p>
        <p className="tracking-wide text-yellow-500">
          Straight out of the oven, straight to you.
        </p>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
