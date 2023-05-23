import { useState } from "react";
import { AppRouter } from "./routes/AppRouter";



export const App = () => {

 const [theme,setTheme] = useState(false)

  return (
  <div className={theme?'':`light-theme`}>
    <button className="bg-black text-white " onClick={()=>setTheme(!theme)}>Button</button>
    < AppRouter />
    </div>
  )
}