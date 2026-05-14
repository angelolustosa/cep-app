import { ibgeApi } from "./api/ibge.api"

export const listarEstados = async () => {
    try {
        const response = await ibgeApi.get('/localidades/estados?orderBy=nome')
        return response.data

    } catch (error) {
        console.error('Erro ao listar estados', error)
        throw error
    }
}

export const listarMunicipiosPorUF = async (uf) => {
    try {
        const response = await ibgeApi.get(`/localidades/estados/${uf}/municipios`)
        return response.data

    } catch (error) {
        console.error('Erro ao listar municípios', error)
        throw error
    }
}