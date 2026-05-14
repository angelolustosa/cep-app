import { viacepApi } from "./api/cep.api"

export const buscarCep = async (cep) => {
    try {
        const response = await viacepApi.get(`/${cep}/json/`)
        return response.data

    } catch (error) {
        console.error('Erro ao buscar CEP', error)
        throw error
    }
}