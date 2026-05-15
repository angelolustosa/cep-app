import { cepApi } from "./api/cep.api"

export const buscarCep = async (cep) => {
    const response = await cepApi.get(`/${cep}/json/`)
    return response.data;
}