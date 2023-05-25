import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const Theme = ({ children }) => {


  const [theme, setTheme] = useState(true)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Theme