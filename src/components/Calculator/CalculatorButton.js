import React from 'react';

function CalculatorButton({ value, number, index }) {
  return (
    <>
      <div className="numb" onPointerDown={() => number(index)}>
        {value}
      </div>
    </>
  );
}

export default CalculatorButton;
