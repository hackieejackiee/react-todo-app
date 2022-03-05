import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (prop) => {
  const toDoStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };
  return (
    <div className="container" style={toDoStyle}>
      <h3 className="my-3">{prop.title}</h3>
      {prop.toDoList.length > 0
        ? prop.toDoList.map((toDo) => {
            return (
              <TodoItem
                toDo={toDo}
                key={toDo.id}
                onDelete={prop.onDelete}
              ></TodoItem>
            );
          })
        : "No ToDos to display!!!"}
    </div>
  );
};
