import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./Pages/MainPage";
import { BasicLayout } from "./Layout/BasicLayout";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { ServicesPage } from "./Pages/ServicesPage";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
      </Routes>
    </BasicLayout>
  );
}

export default App;
