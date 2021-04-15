import { post } from './base.service'

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const log = (body) => {
    postData(body, 'log')
}

export const info = (body) => {
    postData(body, 'info')
}

export const error = (body) => {
    postData(body, 'error')
}

export const warning = (body) => {
    postData(body, 'warning')
}

export const debug = (body) => {
    postData(body, 'debug')
}

function postData(body, logType) {
    let request = {
        body: JSON.stringify(body),
        type: logType
    }
    post(API_URL, request)
}