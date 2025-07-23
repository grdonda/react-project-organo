import "./InputSelect.css";

export const InputSelect = ({ label, list, value, onChange }) => {
    return (
        <div className="input-select">
            <label>{label}</label>
            <select onChange={onChange} value={value}>
                <option disabled value="">Selecione uma opção</option>
                {list.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};
