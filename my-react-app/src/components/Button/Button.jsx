import "./button.css";

function Button({ children, use, disabled, handler }) {
  return (
    <button className={`btn btn--${use}`} disabled={disabled} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
