import React from 'react'

export const TodoItem = ({toDo, onDelete}) => {
  return (
    <div className="container my-3">
        <h4>{toDo.title}</h4>
        <p>{toDo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(toDo)}>Delete</button>
    </div>
  )
}
