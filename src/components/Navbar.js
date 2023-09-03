import React from 'react';

const Navbar = ({ onHistoryClick }) => {
  return (
    <div className="nav">
      <div className="logo">Dictionary App</div>
      <div className="menu-btns">
        <a href="/">Home</a>
        <button onClick={onHistoryClick}>History</button>
      </div>
    </div>
  );
};

export default Navbar;
