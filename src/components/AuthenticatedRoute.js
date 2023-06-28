import React, { useContext } from "react";
import Auth from '../contexts/Auth';
import { Route } from "react-router-dom";
import Home from "../pages/Home";

const AuthenticatedRoute = ({ path, element }) => {
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? (
        <Route exact path={path} element={element}></Route>
    ) : (
        <Route path="/" element={<Home />}></Route>
    )
}

export default AuthenticatedRoute;