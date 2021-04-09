import React from "react";

const createNameContext = (name, defaultValue) => {
    let context = React.createContext(defaultValue);
    context.displayName = name;
    return context;
};

export default createNameContext;
