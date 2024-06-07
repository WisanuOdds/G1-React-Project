
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDoApp from "./components/ToDoApp";

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/todo", element: <ToDoApp /> },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; // ส่วนนี้คือการ export คลาส App ออกไปให้โปรเจคอื่นๆ ใช้งาน
