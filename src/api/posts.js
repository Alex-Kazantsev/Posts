import axios from 'axios'

export const getPosts = async params => {
    const response = await axios.get('/posts', { params })
    return response.data
}

export const getPost = async id => {
    const response = await axios.get('/posts/' + id)
    return response.data
}

export const getComments = async id => {
    const response = await axios.get('/posts/' + id + '/comments')
    return response.data
}

export const createPost = async post => {
    const response = await axios.post('/posts/', post)
    return response.data
}

export const editPost = async (id, post) => {
    const response = await axios.patch('/posts/' + id, post)
    return response.data
}


export const deletePost = async id => {
    const response = await axios.delete('/posts/' + id)
    return response.data
}
