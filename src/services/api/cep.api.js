import axios from 'axios'

export const viacepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})