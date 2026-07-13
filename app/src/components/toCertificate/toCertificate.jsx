import { useNavigate } from 'react-router-dom';
import "./toCerfiticate.css";
import { Link } from 'react-router-dom';
import Button from '../button/Button';


const ToCertificate = () => {

const navigate = useNavigate();

const handleIrAResultados = () => {

    navigate('/buscar-certificado');
  };
  return (

    <div className="cont_to">
        <div className="div1" >
        <h2 className="to_h2">Validá los certificados de tus formaciones</h2>
        </div>
        <div className="div2" >
          <Link to="/buscar-certificado" >
          <Button text='Validar certificado'></Button>
          </Link>
        </div>
    </div>


  );
};

export default ToCertificate;
