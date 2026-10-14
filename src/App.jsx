import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Clases from "./pages/Clases.jsx";
import Docentes from "./pages/Docentes.jsx";


const USUARIO = "Mirian";

export default function App() {
  return (
    <div className="layout">
      <Sidebar usuario={USUARIO} />

      <div className="main">
        <Topbar titulo="Asignación Clases" />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
