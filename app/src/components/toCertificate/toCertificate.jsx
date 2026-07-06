import { useNavigate } from 'react-router-dom';
import "./toCerfiticate.css";


const ToCertificate = () => {

const navigate = useNavigate();

const handleIrAResultados = () => {

    navigate('/buscar-certificado');
  };
  return (

    <div className="cont_to">
        <div className="div1" >
        <h2 className="to_h2">Validar certificado</h2>
        </div>
        <div className="div2" >
    <h4 className="to_h4" >Valida los certificados de tus formaciones</h4>
    <button onClick={handleIrAResultados}>Buscar</button>;
        </div>
    </div>


  );
};

export default ToCertificate;
