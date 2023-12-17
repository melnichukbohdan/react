import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privetRoutes} from "../router/index"
import Posts from "../pages/Posts";
import Login from "../pages/Login";

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Routes>
                {privetRoutes.map(route =>
                    <Route
                        key={Math.random()}
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route path="*" element={<Posts />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={Math.random()}
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route path="*" element={<Login />} />
            </Routes>
    );
};

export default AppRouter;