import "./App.css";
import {
  LoaderFunctionArgs,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDoApp from "./components/ToDoApp";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false); // สร้าง state ชื่อ isLoing และเริ่มต้นด้วยค่า false

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "todo", loader: protectedLoader, element: <ToDoApp /> },
      ],
    },
  ]);

  function Layout() {
    console.log(isLogin);
    return (
      <>
        <body>
          <button
            className="login"
            style={{
              color: isLogin ? "#ef3737" : "#3486fa",
              marginLeft: "20px",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Log out" : "Log in"}
          </button>
          <div className="body">
            <NavBar />
            <Outlet />
          </div>
        </body>
      </>
    );
  }

  function protectedLoader({}: LoaderFunctionArgs) {
    console.log(" is  protectedLoader :" + isLogin);
    if (!isLogin) {
      return redirect("/");
    }
    return null;
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; // ส่วนนี้คือการ export คลาส App ออกไปให้โปรเจคอื่นๆ ใช้งาน
