

function Input({ name, type, placeholder,value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input