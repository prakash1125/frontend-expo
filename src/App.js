import { useState } from "react";
import { AppRouter } from "./routes/AppRouter";



export const App = () => {

 const [theme,setTheme] = useState(true)

  return (
  <div className={theme?'':`light-theme`}>
    <button className="bg-skin-main text-skin-white border border-blue-200 drop-shadow-2xl m-1" onClick={()=>setTheme(!theme)}>Theme Toggler</button>
    < AppRouter />
    </div>
  )
}