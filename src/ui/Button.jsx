import { Link } from "react-router-dom";

function Button({
  to = "",
  className = "",
  children,
  disabled = false,
  type = "",
  onClick = () => {},
  htmlType = "button",
}) {
  const base = `inline-block cursor-pointer rounded-full p-3 text-xs font-bold text-stone-800 uppercase shadow-md transition-colors duration-200 disabled:cursor-not-allowed`;

  const styles = {
    base,
    primary:
      base +
      "px-4 py-3 md:px-6 md:py-4 bg-yellow-500 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none",
    small:
      base +
      "py-2 md:px-5 sm:py-2.5 text-xs bg-yellow-500 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none",
    button:
      base +
      " bg-green-400 hover:bg-green-500 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:outline-none",
    secondary:
      "inline-block cursor-pointer bg-transparent border uppercase font-bold border-stone-600 text-xs rounded-full p-3 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed hover:bg-yellow-500 hover:text-stone-800 hover:border-yellow-500 shadow-md transition-colors duration-200",
    search:
      "flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-stone-800 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none transition-colors duration-200 shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
  };

  if (to)
    return (
      <Link to={to} className={`${styles[type]} ${className}`}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      className={`${styles[type]} ${className}`}
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
