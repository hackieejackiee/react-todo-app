import React, { useState } from "react";

export const AddToDo = (prop) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addToDo = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") {
      alert("Tile or Description is empty");
    } else {
      prop.onAdd(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container">
      <h3>{prop.title}</h3>
      <form onSubmit={addToDo}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            placeholder="Description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add ToDo
        </button>
      </form>
    </div>
  );
};
