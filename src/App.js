import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Gellary from "./Components/Gellary/Gellary";
import Home from "./Components/Home/Home";
import Main from "./Outlet/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "gellary", element: <Gellary></Gellary> },
        { path: "about-us", element: <AboutUs></AboutUs> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
