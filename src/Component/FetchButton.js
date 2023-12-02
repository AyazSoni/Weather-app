import React from 'react';
import Search from "../Images/search.png";
import "../CSS/FetchButton.css";
// FetchButton component for triggering weather data Fetch

const FetchButton = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading} >
      <img src={Search} alt="search" />
    </button>
  );
};

export default FetchButton;