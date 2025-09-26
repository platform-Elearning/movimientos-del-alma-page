import { Route, Routes } from "react-router-dom";
import Index from "../pages/index/index";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Nosotros from "../sections/Nosotros/Nosotros";
import Clases from "../sections/Clases/Clases";
import ClasesOnline from "../sections/ClasesOnline/ClasesOnline";
import InfoJimePage from "../pages/infoJime/InfoJimePage";
import WhatsAppButton from "../components/whatsappButton/whatsAppButton"; // Cambia el nombre a mayúscula
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AppRouter = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/clases" element={<Clases />} />
                <Route path="/clasesOnline" element={<ClasesOnline />} />
                <Route path="/info-jime" element={<InfoJimePage />} />

            </Routes>
            
            <WhatsAppButton /> {/* Cambia el uso del componente */}
        </>
    );
};

export default AppRouter;