import React from "react";
import Checkbox from "rsuite/Checkbox";
const TogglePassword = ({ isPasswordVisible, setisPasswordVisible }) => {
  const handleTogglePass = () => {
    setisPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="togglePassword">
      <input
        type={`${isPasswordVisible ? "text" : "password"}`}
        name="password"
        id="password"
      />
      <div className="showPasswordBtn">
        <Checkbox onClick={handleTogglePass}> show password</Checkbox>
      </div>
    </div>
  );
};

export default TogglePassword;
