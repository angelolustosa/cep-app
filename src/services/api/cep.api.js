import axios from "axios";

export const cepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
  headers: { 'Content-Type': 'application/json' },
});