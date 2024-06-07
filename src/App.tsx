
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDoApp from "./components/ToDoApp";
import NavBar from "./components/NavBar";

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Layout />
  ,children:[
    { index: true, element: <HomePage /> },
    { path: "todo", element: <ToDoApp /> },
  ]},]);

  function Layout(){
    return (
      <div className="body">
        <NavBar />
        <Outlet />
      </div>
    );
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; // ส่วนนี้คือการ export คลาส App ออกไปให้โปรเจคอื่นๆ ใช้งาน
