import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects/Projects";
import Skill from "../Pages/Skill/Skill";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
              path:"projects",
              element:<Projects/>
            },
            {
              path:"skill",
              element:<Skill/>
            },
            {
              path:"contact",
              element:<Contact/>
            }
        ]
    }
])

export default router;