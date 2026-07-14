import { useState } from 'react';
import { getCertificateByDni } from '../../services/certificate.js';
import './searchCertificate.css';
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../sections/footer/footer.jsx";
import { Link } from "react-router-dom";


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [dni, setDni] = useState('');
  const [result, setResult] = useState(null);
  const [todosDesaprobados, setTodosDesaprobados] = useState(false);

  // boton para volver
  const handleSearch = async (dni) => {
    try {
      // reseteamos los valores antes de la búsqueda
      setResult(false);
      students.forEach(s => s.url_certificate = null);

      const data = await getCertificateByDni(dni);
      setStudents(data.enrollments);
      setResult(true);
      const todosDesaprobados = data.enrollments.every(e => e.approved === false);
      setTodosDesaprobados(todosDesaprobados);
    } catch {
      setResult(false);
    }
  };




  ///////////////////////////////////


  return (
    <section >
      <Navbar />

      <div className="search-certificate-page">


        <Link to="/" className="back-button borde">
          &larr; Volver a inicio
        </Link>
        <div className='search' >

          <div className='search-form'>
            <h2 className='search-title' >Validar certificado</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSearch(dni);
            }} className="search-form-form">
              <label htmlFor="">Ingresar DNI</label>
              <input
                type="text"
                placeholder="28345678"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
              />
              <button type="submit" >
                buscar
              </button>
            </form>

          </div>
        </div>





        <div className="cont-list" >


          {result === false ? (
            <div className="no-result">
              <p className="no-result-p">No se encontraron certificados para el DNI ingresado.</p>
            </div>
          ) : null}

          {todosDesaprobados ? (
            <div className="no-result">
              <p className="no-result-p">El alumno/a ingresado no tiene certificados aprobados.</p>
            </div>
          ) : null}



          {students.map(s =>
            <div className="cont-el-sub" key={s.url_certificate}>

              {s.url_certificate !== null ? (
                <div className="cont-el">
                  <h3>{s.name} {s.lastname}</h3>
                  <div className="cont-el-2" >
                    <div className="cont-el-2-tit" ><p>{s.course_name}</p></div>
                    <div className="cont-el-2-certi">
                      <a href={s.url_certificate} target="_blank" className="cont-el-a">
                        Link al certificado
                      </a>

                    </div>
                  </div>
                </div>
              ) : (
                null
              )}
            </div>)}
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default StudentList;


