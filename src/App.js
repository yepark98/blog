import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderArea from "./components/HeaderArea";
import MainPage from "./components/MainPage";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderArea />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
