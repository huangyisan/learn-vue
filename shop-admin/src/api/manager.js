import axios from '~/axios.js'

export function login(username, password) {
    return axios.post("/admin/login", {
        username: username, 
        password: password
    })
}