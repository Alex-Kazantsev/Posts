import axios from 'axios'

export const getUsers = async params => {
    const response = await axios.get('/users', { params })
    return response.data
}
