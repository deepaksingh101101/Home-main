
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import ContactUs from './pages/contactPage/ContactUs';
import BlogList from './pages/bloglist/BlogList';
import Plans from './pages/pricing/Plans';



function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contactPage" element={<ContactUs/>}/>
        <Route path="/bloglist" element={<BlogList/>}/>
        <Route path="/pricing" element={<Plans/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
