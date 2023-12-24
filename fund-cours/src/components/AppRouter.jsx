import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privetRoutes} from "../router/index"
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader />
    }
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