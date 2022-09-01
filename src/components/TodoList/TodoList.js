import React, { useState, useEffect, useRef } from 'react';
import TodoItem from './TodoItem';
import TodoLeft from './TodoLeft';
import TodoButtons from './TodoButtons';
import Context from '../context';

function TodoList() {
  const LOCAL_STORAGE_KEY = 'todoApp.todos';
  let [todos, setTodos] = useState([]);
  let prevTodo = useRef([])
  let render = useRef(0)

  //Для разработки
  useEffect(() => {
    render.current++
  })

  //сохранение предидущей версии для отмены последнего действия
  useEffect(() => {
    prevTodo.current = todos
  }, [todos])

  //Работа с localStorage
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //переключатель фокуса на item
  function focus(id) {
    setTodos(
      (todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.focus = !todo.focus;
        }
        return todo;
      }))
    );
  }

  //переключатель чека
  function toggle(id) {
    setTodos(
      (todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }))
    );
  }

  //добавление в список
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
          focus: false,
        },
      ])
    );
  }

  //удаление из списка
  function removeTodo() {
    setTodos(todos.filter((todo) => !todo.focus));
  }

  //очистка завершенных
  function clearComplete() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <Context.Provider value={{ removeTodo, clearComplete }}>
      <div className="wrapList">
        <div className="header">Записная книжка</div>

        <TodoLeft todos={todos} render={render}/>

        <TodoButtons addTodo={addTodo} todos={todos} setTodos={setTodos} prevTodo={prevTodo}/>

        {todos.length ? (
          todos.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                index={index}
                focus={focus}
                toggle={toggle}
                key={todo.id}
              />
            );
          })
        ) : (
          <p className="noTodos">Нет записей</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default TodoList;
