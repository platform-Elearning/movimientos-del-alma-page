import api from '../api.js';

export const getCertificateByDni = async (student_id) => {
  //console.log("Obteniendo certificados para el DNI:", student_id); 
  const response = await api.get(`/enrollments/getAllEnrollmentsByStudentDni/${student_id}`); // Ajusta según tu ruta
  return response.data;
};

