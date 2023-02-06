import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const Counter = ({ setcounterNum, counterNum }) => {
  return (
    <div className="counter d-flex flex-column align-items-center justify-content-center">
      <h1>Counter</h1>
      <span className="display-6 d-inline-block mx-5">{counterNum}</span>
      <div className="d-flex align-items-center py-3">
        <button
          className="btn btn-outline-dark hello dlgjldksjk hello mx-2"
          onClick={() => {
            setcounterNum(counterNum - 1);
          }}
        >
          <BiMinus />
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => {
            setcounterNum(counterNum + 1);
          }}
        >
          <BiPlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
