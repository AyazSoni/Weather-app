import React from 'react';
import '../CSS/UnitConverter.css';

// UnitConverter component for changing temperature units
const UnitConverter = ({ onUnitChange }) => {
  return (
    <div>
      {/* Radio button for Celsius */}
      <input
        type="radio"
        id="celsius"
        name="temperature"
        onChange={() => {
          console.log('Clicked Celsius');
          onUnitChange('°C');
        }}
        checked
      />
      <label htmlFor="celsius">C</label>

      {/* Radio button for Fahrenheit */}
      <input
        type="radio"
        id="fahrenheit"
        name="temperature"
        onChange={() => {
          console.log('Clicked Fahrenheit');
          onUnitChange('°F');
        }}
      />
      <label htmlFor="fahrenheit">F</label>
    </div>
  );
};

export default UnitConverter;
