import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TodoItemInner from './TodoItemInner';
import TodoItemCheck from './TodoItemCheck';

function TodoItem({ todo, index, focus, toggle }) {
  let classItem = ['item'];
  let classLabelDone = [];

  let isLabel = useRef(null)

  if (todo.completed) {
    classItem.push('itemCompleted')
    classLabelDone.push('lableDone')
  }

  if (todo.focus && !todo.completed) {
    classItem.push('itemFocus');
  }

  return (
    <>
      <div
        className={classItem.join(' ')}
        onPointerDown={(e) => { if (e.target !== isLabel.current) focus(todo.id) 
        }}
      >
        <TodoItemInner
          index={index + 1}
          todo={todo}
        />

        <TodoItemCheck
          completed={todo.completed}
          classLabelDone={classLabelDone}
          toggle={toggle}
          id={todo.id}
          isLabel={isLabel}
        />
      </div>
    </>
  );
}
TodoItem.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default TodoItem;
