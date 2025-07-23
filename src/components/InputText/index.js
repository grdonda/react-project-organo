import "./InputText.css";

export const InputText = ({ label, value, placeholder, type, required, onChange }) => {

  return (
    <div className="input-text">
      <label>{label}</label>
      <input
        type={type || "text"}
        name={label}
        value={value}
        autoComplete="off"
        required={required || false}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}