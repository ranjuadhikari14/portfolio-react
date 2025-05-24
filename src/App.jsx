import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./Pages/NotFound"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route index element ={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/home" element={<Home/>} />
      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
