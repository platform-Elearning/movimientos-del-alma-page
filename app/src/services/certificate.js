import api from '../api.js';



// Verificacion publica de UNA credencial por su codigo. Reemplaza la busqueda por
// DNI: la clave es un dato del certificado y no de la persona, asi que probar
// codigos al azar no permite recorrer alumnos.
export const verifyCertificateByCode = async (verification_code) => {
  const response = await api.get(`/enrollments/verify/${verification_code}`);
  return response.data;
};
