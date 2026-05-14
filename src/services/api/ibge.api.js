import axios from 'axios'

export const ibgeApi = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})