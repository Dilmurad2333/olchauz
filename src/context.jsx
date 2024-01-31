import React, { createContext, useState } from "react";

export let Context = createContext(null);
const ContextProvider = ({ children }) => {
  let [searchTitle, setSearchTitle] = useState("");
  return (
    <Context.Provider value={{ searchTitle, setSearchTitle }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
