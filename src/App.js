import { useState, useContext } from "react";
import { AppRouter } from "./routes/AppRouter";
import React from 'react';
import { ThemeContext } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./redux/store";


const MyContext = React.createContext();


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

