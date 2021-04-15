import { get, post, _delete } from '../core/services/base.service'

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postValues = (values) => {
    return post(API_URL, values)
}

export const getValues = () => {
    return get(API_URL)
}


export const deleteValues = (id) => {
    return _delete(`${API_URL}/${id}`)
}