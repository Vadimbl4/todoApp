import './components/styles/App.scss'
import React from 'react';
import TodoList from './components/TodoList/TodoList';
import ClockAnalog from './components/Clocks/ClockAnalog';
import ClockDigital from './components/Clocks/ClockDigital';
import Calculator from './components/Calculator/Calculator'

let config = {
  analogClock: false,
  digitalClock: false,
  todoList: true,
  calculator: false,
}

function App() {

  return (
    <>
    <div className='container'>
      {config.todoList ? <TodoList/> : null}
      {config.analogClock ? <ClockAnalog/> : null}
      {config.digitalClock ? <ClockDigital/> : null}
      {config.calculator ? <Calculator/> : null}
      </div>
      
    </>
  );
}

export default App;
