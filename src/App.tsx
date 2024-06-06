import './App.css'
function App() {
  return (
    <>
      <body>
        <div className="box">
          <h1>Todo app</h1>
          <input id='input' placeholder="please input here" type="text" />
          <button id="button">add</button>
        </div>
        <ul>
          <li> taks1</li>
          <li> taks2</li>
          <li> taks3</li>
          <li> taks4</li>
        </ul>
      </body>
    </>
  )
}

export default App   // ส่วนนี้คือการ export คลาส App ออกไปให้โปรเจคอื่นๆ ใช้งาน
//
