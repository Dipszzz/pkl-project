import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Layanan from "./pages/Layanan";
import Kontak from "./pages/Kontak";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tentang-kami' element={<TentangKami />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/kontak' element={<Kontak />} />
      </Routes>
    </Router>
  );
}

export default App;
