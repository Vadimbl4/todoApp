import React from 'react';

function TodoItemCheck({ classLabelDone, toggle, id, isLabel }) {
  return (
    <>
      <input hidden={true} id="checkBoxLabel" type="checkbox" />
      <label
        className={classLabelDone.join('')}
        htmlFor="checkBoxLabel"
        onPointerDown={() => toggle(id)}
        ref={isLabel}
      ></label>
    </>
  );
}

export default TodoItemCheck;
