
import axios from 'axios'
const Axios = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export default Axios;