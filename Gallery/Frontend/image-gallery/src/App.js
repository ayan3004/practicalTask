import './App.css';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Admin from './Components/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/Admin" element={<Admin/>} />
            
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
