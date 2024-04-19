import React, { useState } from 'react';

function AddQuestion2() {
    const [inputValues, setInputValues] = useState(['']); // Initial array with one empty string

    const addInput = () => {
        setInputValues([...inputValues, '']); // Add a new empty string to the array
    };

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    return (
        <div>
            {inputValues.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Input ${index + 1}`}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                />
            ))}
            <button onChange={addInput}>Add Input</button>
        </div>
    );
}

export default AddQuestion2;