import React from "react";

export default React.createContext({
    isAuthenticated: true,
    setIsAuthenticated: value => {}
})