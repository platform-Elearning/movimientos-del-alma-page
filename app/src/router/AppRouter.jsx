import { Route, Routes } from "react-router-dom";
import Index from "../pages/index/index";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Nosotros from "../sections/Nosotros/Nosotros"; // Importa el componente Nosotros

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nosotros" element={<Nosotros />} /> {/* Agrega la ruta para "Nosotros" */}
        </Routes>
    );
};

export default AppRouter;