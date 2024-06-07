import axios from "axios";
import AddTodoForm from "./AddTodoForm";
import Tasklist from "./TaskList";
import { useEffect, useState } from "react";

const ToDoApp = () => {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [checkbox, setcheckbox] = useState<boolean[]>([]);
  const checkBoolean = (id: number) => {
    setcheckbox(checkbox.map((j, i) => (i === id ? !j : j)));
  };
   

  interface Todo {
    id: number;
    title: string;
    isCommpleted: boolean;
  }
  useEffect(() => {
    axios
      .get<Todo[]>("https://6662d8bd62966e20ef0a4423.mockapi.io/api/g1/todos")
      .then((res) => {
        console.log(res.data); 
        setList(res.data.map((i: any) => i.title));
        setcheckbox(res.data.map((i: any) => i.isCommpleted));
      });
  });

  return (
    <div className="box">
      <div className="AppToDo">
        <h1>Todo app</h1>
        <AddTodoForm
          setcheckbox={setcheckbox}
          setTask={setTask}
          setList={setList}
          task={task}
          list={list}
          checkbox={checkbox}
        />
      </div>
      <Tasklist list={list} checked={checkbox} onCheck={checkBoolean} />
    </div>
  );
};
export default ToDoApp;
