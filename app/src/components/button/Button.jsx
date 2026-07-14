// Button.jsx
import "./Button.css";

const Button = ({ text = "Button", onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
