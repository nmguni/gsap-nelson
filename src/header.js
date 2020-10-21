import React from "react";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-icons">
            <BsCircle className="icon" /> <FaBars className="icon" />
          </div>
          <div className="header-text"></div>
          <div className="header-numbers">123</div>
        </div>
        <div className="header-image"></div>
      </div>
    </div>
  );
};
