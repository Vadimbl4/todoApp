import React from 'react';

function CalculatorMath({ item, math, index }) {
  return (
    <div className="mathItem" onPointerDown={() => math(item, index)}>
      {item.title}
    </div>
  );
}
export default CalculatorMath;
