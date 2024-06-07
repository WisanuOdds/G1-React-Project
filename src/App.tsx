import './App.css'
import AddTodoForm from './components/AddTodoForm'
import Tasklist from './components/TaskList'

function App() {
  return (
    <>
      <body>
        <div className="box">
          <h1>Todo app</h1>
          <AddTodoForm />
        </div>
        <Tasklist />
      </body>
    </>
  )
}

export default App   // ส่วนนี้คือการ export คลาส App ออกไปให้โปรเจคอื่นๆ ใช้งาน

