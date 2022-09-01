import React from 'react'

export default function TodoLeft({todos, render}) {
  return (
    <div className='counter'>Осталось дел - {todos.length}, рендеров - {render.current}</div>
  )
}
