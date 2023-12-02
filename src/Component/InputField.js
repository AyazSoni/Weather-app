import React from 'react';
import "../CSS/InputField.css";

// InputField component for entering the city name
const InputField = ({ city, setCity }) => {
  return (
     <input
      className="location-input"
      type="text"
      placeholder="enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  );
};

export default InputField;
