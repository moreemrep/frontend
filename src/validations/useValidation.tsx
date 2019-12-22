import { string, boolean, number } from 'yup';

export function useValidation() {
  return {
    nome: string().required('obrigatório'),
    tipo: string().required('obrigatório'),
    disponivel: boolean().required('obrigatorio'),
    endereco: string().required('obrigatório'),
    mostrarNoMapa: boolean().required('obrigatorio'),
    longitude: number().required('obrigatorio'),
    latitude: number().required('obrigatorio'),
    email: string()
      .email('email inválido')
      .required('obrigatório'),
    senha: string()
      .required('obrigatório')
      .min(6, 'minimo 6 caracteres'),
    descricao: string()
      .required('obrigatório')
      .min(10, 'mínimo 10 caracteres')
      .max(500, 'máximo 500 caracteres')
  };
}
