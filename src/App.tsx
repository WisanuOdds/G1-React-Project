import { useEffect, useRef, useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Tasklist from "./components/TaskList";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [checkbox, setcheckbox] = useState<boolean[]>([]);
  const checkBoolean = (id: number) => {
    setcheckbox(checkbox.map((j, i) => i===id ? !j:j))
  }
  

  return (
    <>
      <body>
        <div className="box">
          <h1>Todo app</h1>
          <AddTodoForm
            setcheckbox={setcheckbox}
            setTask={setTask}
            setList={setList}
            task={task}
            list={list}
            checkbox={checkbox}
          />
          <Tasklist list={list}  checked={checkbox} onCheck={checkBoolean} />
        </div>
      </body>
    </>
  );
}

export default App; // ส่วนนี้คือการ export คลาส App ออกไปให้โปรเจคอื่นๆ ใช้งาน
