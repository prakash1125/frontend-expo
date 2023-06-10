import React, { useState, useEffect } from 'react';

const Input = (props) => {
    const [value, setValue] = useState(props.value || null);

    const decrement = () => {
        setValue((prevValue) => (prevValue !== null ? prevValue - 1 : null));
    };

    const increment = () => {
        setValue((prevValue) => (prevValue !== null ? prevValue + 1 : 0));
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue !== '' ? Number(newValue) : null);
    };

    useEffect(() => {
        if (props.value !== value) {
            setValue(props.value || null);
        }
    }, [props.value]);

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
                value={value !== null ? value : ''}
                placeholder={props.placeholder}
                onChange={handleChange}
                inputMode="numeric"
                style={{ appearance: 'textfield' }}
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
