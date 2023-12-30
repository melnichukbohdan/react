import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>} />
                <Route path={'/todos'} element={<TodosPage/>} />
                <Route path={'/users/:id'} element={<UserItemPage/>} />
                <Route path={'/todos/:id'} element={<TodosItemPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;