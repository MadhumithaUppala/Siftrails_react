import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from './components/Home'

import Transaction from './components/Transaction'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

 {
    path: "/Transaction",
    element: <Transaction />,
  },

]);

function App() {

 return <RouterProvider router={router} />;
}
export default App



