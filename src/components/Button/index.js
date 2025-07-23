import "./Button.css";

// uma das formas de usar props
export const Button = ({ type, children, onClick }) => {

    return (
        <button type={type} className="button" onClick={onClick}>
            {children}
        </button>
    );
}