import padelLogo from "../../assets/logopadel.png";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/prode");
  };

  const navigateToLogin = () => {
    navigate("/prode");
  };

  return (
    <>
      <div className="containerIndex">
        <a target="_blank">
          <img src={padelLogo} className="logo" alt="React logo" />
        </a>
        <h1>Prode Padel</h1>
        <p>
          Bienvenido a ProdePadel: una emocionante plataforma de pronósticos
          deportivos donde puedes participar eligiendo los resultados de los
          partidos. Compite con otros jugadores y, si aciertas más resultados,
          tendrás la oportunidad de ganar increíbles premios. Lo recaudado en
          cada torneo se destinará a apoyar a jóvenes promesas del pádel en
          Argentina que carecen de los recursos necesarios para alcanzar sus
          metas. Únete a nosotros y, además de divertirte, contribuye a mejorar
          el futuro del pádel en nuestro país.
        </p>
        <div className="card">
          <button onClick={navigateToLogin}>Iniciar Sesion</button>
          <button onClick={navigateToRegister}>Registrarse</button>
        </div>
      </div>
    </>
  );
};

export default Index;
