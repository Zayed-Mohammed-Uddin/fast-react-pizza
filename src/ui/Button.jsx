import { Link } from "react-router-dom";

function Button({
  to = "",
  children,
  disabled = false,
  type = "",
  onClick = () => {},
  htmlType = "button",
}) {
  const baseStyles =
    "inline-block cursor-pointer rounded-full text-xs font-bold uppercase shadow-lg transition-colors duration-200 disabled:cursor-not-allowed";

  const focusRing = "focus:ring-2 focus:ring-offset-2 focus:outline-none";

  const yellowVariant =
    "bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-400";
  const greenVariant = "bg-green-400 hover:bg-green-500 focus:ring-green-400";

  const commonText = "text-stone-800";
  const standardPadding = "p-3";

  const styles = {
    base: `${baseStyles} ${standardPadding} ${commonText}`,
    primary: `${baseStyles} px-4 py-3 md:px-6 md:py-4 ${commonText} ${yellowVariant} ${focusRing}`,
    small: `${baseStyles} py-2 md:px-5 sm:py-2.5 ${commonText} ${yellowVariant} ${focusRing}`,
    delete: `${baseStyles} py-2 md:px-5 sm:py-2.5 bg-red-500 hover:bg-red-600 focus:ring-red-400`,
    cart: `${baseStyles} ${standardPadding} ${commonText} ${greenVariant} ${focusRing}`,
    secondary: `${baseStyles} ${standardPadding} bg-transparent border border-stone-600 ${commonText} hover:bg-yellow-500 hover:text-stone-800 hover:border-yellow-500 focus:ring-yellow-400 ${focusRing}`,
    open: `${baseStyles} ${standardPadding} ${commonText} ${focusRing} ${greenVariant}`,
    search: `flex items-center justify-center w-10 h-10 rounded-full ${commonText} shadow-lg transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 absolute right-0 ${yellowVariant} ${focusRing}`,
    order: `${baseStyles} ${standardPadding} ${commonText} ${yellowVariant} ${focusRing}`,
  };

  const buttonClass = styles[type] || styles.base;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={buttonClass}
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
