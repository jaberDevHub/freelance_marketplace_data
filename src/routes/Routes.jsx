import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTasks from "../pages/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../pages/MyPostedTasks/MyPostedTasks";
import PrivateRoute from "./PrivateRoute";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/add-task",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "/browse-tasks",
                element: <BrowseTasks></BrowseTasks>
            },
            {
                path: "/my-posted-tasks",
                element: <PrivateRoute><MyPostedTasks></MyPostedTasks></PrivateRoute>
            },
            {
                path: "/task/:id",
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
            },
            {
                path: "/update-task/:id",
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
            }
        ]
    }
]);

export default router;