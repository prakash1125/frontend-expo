const Input = ({
  handleDecrement,
  value,
  placeholder,
  handleIncrement,
  handleChange,
}) => {
  return (
    <div className="flex rounded-sm mt-1">
      <button
        onClick={() => handleDecrement(placeholder)}
        data-action="decrement"
        className="bg-[#22262A] text-skin-white  h-full px-2 rounded-l cursor-pointer outline-none"
      >
        <span className="text-2xl font-thin">−</span>
      </button>
      <input
        type="text"
        className="text-center w-full bg-[#22262A] font-semibold text-md md:text-base flex items-center text-skin-white outline-none"
        name="custom-input-number"
        value={value !== null && value !== 0 ? value : ""}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, placeholder)}
        inputMode="numeric"
        style={{ appearance: "textfield" }}
      />
      <button
        onClick={() => handleIncrement(placeholder)}
        data-action="increment"
        className="bg-[#22262A] text-skin-white  h-full px-2 rounded-r cursor-pointer"
      >
        <span className="text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default Input;
