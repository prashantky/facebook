import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import Home from "./pages/home/Home";
import { CreateStoryPopUp } from "./components/createstorypopup/CreateStoryPopUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
