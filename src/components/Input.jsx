const Input = (props) => {
  const decrement = () => {
    if (props?.placeholder === "stake") {
      if (props.value > 0) {
        props?.setValue((prevValue) => {
          const newValue = prevValue !== null ? prevValue - 1 : 0;
          return newValue;
        });
      }
    } else {
      props?.setValue((prevValue) => {
        const decrementedValue = prevValue !== null ? prevValue - 0.01 : 0;
        const roundedValue = Number(decrementedValue.toFixed(2)); // because of JS floating point precise issue
        return roundedValue;
      });
    }
  };

  const increment = () => {
    props.setValue((prevValue) => {
      if (props?.placeholder === "stake") {
        const newValue = prevValue !== null ? prevValue + 1 : 0;
        return newValue;
      } else {
        const incrementedValue = prevValue !== null ? prevValue + 0.01 : 0;
        const roundedValue = Number(incrementedValue.toFixed(2)); // because of JS floating point precise issue
        return roundedValue;
      }
    });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    props.setValue(newValue !== "" ? newValue : null);
  };

  return (
    <div className="flex rounded-sm mt-1">
      <button
        onClick={decrement}
        data-action="decrement"
        className="bg-[#22262A] text-skin-white h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="text"
        className="text-center w-full bg-[#22262A] font-semibold text-md md:text-base flex items-center text-skin-white outline-none"
        name="custom-input-number"
        value={props?.value !== null ? props?.value : ""}
        placeholder={props.placeholder}
        onChange={handleChange}
        inputMode="numeric"
        style={{ appearance: "textfield" }}
      />
      <button
        onClick={increment}
        data-action="increment"
        className="bg-[#22262A] text-skin-white h-full w-20 rounded-r cursor-pointer"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default Input;
