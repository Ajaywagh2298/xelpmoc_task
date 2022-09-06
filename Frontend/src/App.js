import './App.css';
import {useRoutes} from "react-router-dom";
import UserLogin from "./Pages/user-login";
import UserRegister from "./Pages/user-register";
import Calculator from "./Pages/calculator";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <UserLogin/>,
    },
    {
      path:"/register",
      element:<UserRegister/>
    },
    {
      path:"/calculator",
      element: <Calculator/>
    }
  ]);
};
export default App;
