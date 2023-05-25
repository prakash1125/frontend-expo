import { useState, useContext } from "react";
import { AppRouter } from "./routes/AppRouter";
import React from 'react';
import { ThemeContext } from "./context/ThemeContext";

const MyContext = React.createContext();

export const App = () => {

  const { theme } = useContext(ThemeContext)

  return (

    <div className={theme ? '' : `light-theme`}>
      < AppRouter />
    </div>

  )
}