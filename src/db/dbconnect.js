import axios from 'axios';

export async function obtenerDatosDeAPI() {
  try {
    const response = await axios.get('https://localhost:7030/listar'); 
  } catch (error) {
    console.error('Error al obtener datos de la API de C#:', error);
    throw error;
  }
}