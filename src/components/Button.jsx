const Button = ({
  type = "button",
  onClick = () => {},
  disabled,
  className = "",
  children,
}) => {
  return (
    <button
      className={`button  ${className} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
