import React, { useState, useContext } from 'react';
import Context from '../context';

function TodoButtons({ addTodo, setTodos, prevTodo }) {
  const { removeTodo } = useContext(Context);
  const { clearComplete } = useContext(Context);
  let [value, setValue] = useState('');
  let backUp = prevTodo.current;

  //логика добавления
  function add() {
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  }

  //логика нажатия enter
  function enter(event) {
    if (event.key === 'Enter' && event.target.value) {
      addTodo(event.target.value);
      setValue('');
    }
  }

  return (
    <div className="wrapButtons">
      <div className="butSec">
        <button className="removeCheck" 
        onPointerDown={() => removeTodo()}>
          Удалить выделенное
        </button>

        <button className="removeDone" onPointerDown={() => clearComplete()}>
          Удалить выполненное
        </button>

        <button onPointerDown={() => setTodos([])}>Очистить список</button>

        <button className="cancel" onPointerDown={() => setTodos(backUp)}>
          Отмена действия
        </button>
      </div>
      <div className="addSec">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={enter}
          type="text"
          placeholder="Новая запись"
        />

        <button className="add" onPointerDown={add}>
          Добавить запись
        </button>
      </div>
    </div>
  );
}
export default TodoButtons;
