import { useSelector } from "react-redux";

function User() {
  const { username } = useSelector((state) => state.user);
  return (
    <>
      {username && (
        <div className="hidden text-sm font-semibold md:block">👤 Welcome, {username}</div>
      )}
    </>
  );
}

export default User;
