import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegaSena from "../pages/MegaSena/MegaSena";
import Quina from "../pages/Quina/Quina";
import LotoFacil from "../pages/LotoFacil/LotoFacil";
import LotoMania from "../pages/LotoMania/LotoMania";
import TimeMania from "../pages/TimeMania/TimeMania";
import DiaDeSorte from "../pages/DiaDeSorte/DiaDeSorte";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
        <Route path="Quina/" element={<Quina />} />
        <Route path="LotoFacil/" element={<LotoFacil />} />
        <Route path="LotoMania/" element={<LotoMania />} />
        <Route path="TimeMania/" element={<TimeMania />} />
        <Route path="DiaDeSorte/" element={<DiaDeSorte />} />
      </Routes>
    </BrowserRouter>
  );
};