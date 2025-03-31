import { Route, Routes } from "react-router-dom";
import Index from "../pages/index/index";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Nosotros from "../sections/Nosotros/Nosotros";
import Clases from "../sections/Clases/Clases";
import ClasesOnline from "../sections/ClasesOnline/ClasesOnline";
import WhatsAppButton from "../components/whatsappButton/whatsAppButton"; // Cambia el nombre a mayúscula
const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/clases" element={<Clases />} />
                <Route path="/clasesOnline" element={<ClasesOnline />} />

            </Routes>
            
            <WhatsAppButton /> {/* Cambia el uso del componente */}
        </>
    );
};

export default AppRouter;