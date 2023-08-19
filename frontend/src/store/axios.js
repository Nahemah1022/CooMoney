import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'https://coomoney.nahemah.com/api/v1'
// axios.defaults.baseURL = 'http://localhost:3000/api/v1'
// axios.defaults.baseURL = process.env.API_URL
// axios.defaults.baseURL = 'http://backend/api/v1'

if (localStorage.getItem('token')) {
    let token = localStorage.getItem('token')
    axios.defaults.headers['Authorization'] = 'Bearer ' + token
}

axios.defaults.transformResponse = [
    data => {
        data = JSON.parse(data);
        if (data.status == 500) {
            console.log(data.message)
        }
        return data
    }
]

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'


export { axios as default }
