import NavBar from './NavBar';
import AddTodoForm from './AddTodoForm';
import Tasklist from './TaskList';
import { useState } from 'react';

const ToDoApp = () => {
    const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [checkbox, setcheckbox] = useState<boolean[]>([]);
  const checkBoolean = (id: number) => {
    setcheckbox(checkbox.map((j, i) => i===id ? !j:j))
  }
  return (
    <div><body>
    <div className="box">
    <NavBar/>
      <div className='AppToDo'>
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
      <Tasklist list={list}  checked={checkbox} onCheck={checkBoolean} />
    </div>
  </body></div>
  )
}
export default ToDoApp;
