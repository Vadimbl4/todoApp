import React from 'react';

export default function TodoItemInner({index, classCompleted, todo}) {
  return (
    <>
      <span>
        <strong>{index}</strong>
      </span>
      <span>{todo.title}</span>
    </>
  );
}