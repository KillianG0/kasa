import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import './inder.scss'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About/>}/>

    
      </Routes>
    </BrowserRouter>
  );
}
export default App
