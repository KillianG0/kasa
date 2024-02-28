import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageError from "./Pages/Error/Error";
import Logements from "./Pages/Logements/Logements";
import './main.scss'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About/>}/>
        <Route path="*" element={<PageError/>}/>
        <Route path="Logements/:id" element={<Logements/>}/>

    
      </Routes>
    </BrowserRouter>
  );
}
export default App
