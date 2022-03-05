import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { TodoList } from "./Components/TodoList";
import { useState } from "react";
import { AddToDo } from "./Components/AddToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs } from "./Components/AboutUs";

function App() {
  const title = "ToDo App";
  const showSearch = false;
  const [toDos, setTodos] = useState([
    {
      id: 1,
      title: "Wake up in the morning",
      desc: "We have to go out",
    },
    {
      id: 2,
      title: "Go for a walk",
      desc: "We have to go out",
    },
    {
      id: 3,
      title: "Have breakfast",
      desc: "We have to go out",
    },
  ]);

  const onDelete = (toDoData) => {
    const result = toDos.filter((toDo) => {
      return toDo !== toDoData;
    });
    setTodos(result);
  };

  const onAddToDo = (title, desc) => {
    console.log("addtodo");
    let id;
    if (toDos.length === 0) {
      id = 1;
    } else {
      id = toDos[toDos.length - 1].id + 1;
      const newToDo = {
        id: id,
        title: title,
        desc: desc,
      };
      setTodos([...toDos, newToDo]);
    }
  };

  return (
    <>
      <Router>
        <Header title={title} search={showSearch}></Header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddToDo title="Add ToDo" onAdd={onAddToDo}></AddToDo>
                  <TodoList
                    toDoList={toDos}
                    title="ToDo List"
                    onDelete={onDelete}
                  ></TodoList>
                </>
              );
            }}
          ></Route>
          <Route exact path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
