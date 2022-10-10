import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConcursoPage from "../pages/ConcursoPage/ConcursoPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ConcursoPage />} />
      </Routes>
    </BrowserRouter>
  );
};