import { useState, useContext } from "react";
import { AppRouter } from "./routes/AppRouter";
import React from 'react';
import { ThemeContext } from "./context/ThemeContext";

const MyContext = React.createContext();

import { Provider } from "react-redux";
import store from "./redux/store";
export const App = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <Provider store={store}>
    <div className={theme ? '' : `light-theme`}>
      < AppRouter />
    </div>
    </Provider>

  )
}
   
