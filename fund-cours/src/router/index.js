import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../components/PostIdPage";
import Login from "../pages/Login";

export const privetRoutes = [
    {path: '/about', component: <About />, exact: true},
    {path: '/posts', component: <Posts />, exact: true},
    {path: '/posts/:id', component: <PostIdPage />, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login />, exact: true},
]