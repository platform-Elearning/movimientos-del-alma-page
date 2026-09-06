import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { verifyCertificateByCode } from "../../services/certificate.js";
import "./verifyCredential.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../sections/footer/footer.jsx";

// Una sola pagina para dos usos:
//   /verificar          -> formulario para pegar un codigo
//   /verificar/:code    -> la credencial, publica y sin login
//
// Es publica a proposito: el sentido de una credencial verificable es que un
// tercero pueda comprobarla sin tener cuenta. Lo que la hace segura no es el
// login sino la clave, que pertenece al certificado y no a la persona.
//
// La ruta con :code no se puede prerenderizar -- el conjunto de codigos no se
// conoce en build time -- asi que /verificar esta declarada en spa_prefixes y la
// resuelve el router en el navegador. El shell si se prerenderiza: es este mismo
// componente sin codigo, o sea el formulario.
const VerifyCredential = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(code ? "loading" : "idle");
  const [credential, setCredential] = useState(null);

  useEffect(() => {
    if (!code) {
      setStatus("idle");
      return;
    }
    let cancelled = false;
    setStatus("loading");

    verifyCertificateByCode(code)
      .then((data) => {
        if (cancelled) return;
        setCredential(data.certificate);
        setStatus("found");
      })
      .catch(() => {
        if (!cancelled) setStatus("notfound");
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  // Se formatea en UTC a proposito. La fecha viene como medianoche UTC y es una
  // fecha de calendario, no un instante: interpretada en el huso local (UTC-3)
  // retrocede un dia y un 1 de marzo se muestra como febrero.
  const formatDate = (value) => {
    if (!value) return null;
    const d = new Date(value);
    return Number.isNaN(d.getTime())
      ? null
      : d.toLocaleDateString("es-AR", { year: "numeric", month: "long", timeZone: "UTC" });
  };

  return (
    <section>
      <Navbar />

      <div className="verify-page">
        <Link to="/" className="verify-back">
          &larr; Volver a inicio
        </Link>

        {status === "idle" && (
          <div className="verify-form-box">
            <h1 className="verify-title">Verificar una credencial</h1>
            <p className="verify-lead">
              Ingresá el código que figura en la credencial para comprobar que fue
              emitida por Movimientos del Alma.
            </p>
            <form
              className="verify-form"
              onSubmit={(e) => {
                e.preventDefault();
                const value = input.trim();
                if (value) navigate(`/verificar/${encodeURIComponent(value)}`);
              }}
            >
              <label htmlFor="verify-code">Código de verificación</label>
              <input
                id="verify-code"
                type="text"
                autoComplete="off"
                placeholder="0f8a1c7e-3b52-4d90-9a11-6c2e4f7b8d03"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
              <button type="submit">Verificar</button>
            </form>
          </div>
        )}

        {status === "loading" && (
          <div className="verify-state">
            <p>Verificando credencial…</p>
          </div>
        )}

        {status === "notfound" && (
          <div className="verify-state verify-invalid">
            <h1 className="verify-title">Credencial no válida</h1>
            <p>
              No encontramos ninguna credencial aprobada con ese código. Revisá que
              esté copiado completo.
            </p>
            <Link to="/verificar" className="verify-btn-secondary">
              Probar con otro código
            </Link>
          </div>
        )}

        {status === "found" && credential && (
          <article className="credential">
            <div className="credential-seal">
              <span className="credential-check">✓</span>
              <p>Credencial verificada</p>
            </div>

            <h1 className="credential-name">
              {credential.name} {credential.lastname}
            </h1>
            <p className="credential-intro">completó y aprobó la formación</p>
            <h2 className="credential-course">{credential.course_name}</h2>

            {formatDate(credential.enrollment_date) && (
              <p className="credential-date">
                Cursada iniciada en {formatDate(credential.enrollment_date)}
              </p>
            )}

            <p className="credential-issuer">
              Emitida por <strong>Movimientos del Alma</strong>
            </p>

            {credential.url_certificate && (
              <a
                href={credential.url_certificate}
                target="_blank"
                rel="noreferrer"
                className="credential-link"
              >
                Ver el certificado
              </a>
            )}

            <Link to="/verificar" className="verify-btn-secondary">
              Verificar otra credencial
            </Link>
          </article>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default VerifyCredential;
