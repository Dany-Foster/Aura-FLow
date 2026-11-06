import Dashboard from "@/Pages/Admin/dashboard"
import NotificationComponent from "@/Pages/Admin/notification"
import App from "@/Pages/App"
import Login from "@/Pages/login"
import Register from "@/Pages/register"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Dashboard,
      },
      {
        path: "notification",
        Component: NotificationComponent,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
])
