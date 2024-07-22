import axios from 'axios'
import global from '../../config/appConfig'
const API_URL = global.appUrl

const Client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
    validateStatus: function (status) {
        return status >= 200 && status < 550
    },
})

export {
    Client
}
