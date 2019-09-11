
import axios from 'axios'
const Axios = axios.create({
    baseURL: '',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default Axios;