import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./scenes/navBar/Navbar";
import HomePage from "./scenes/homePage/HomePage";
import Footer from "./scenes/footer/Footer";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
