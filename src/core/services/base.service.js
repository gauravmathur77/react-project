import { errorHandle } from './exception.service';
import constants from '../constants/system.constants';


function processHeaders() {
    let headers = {
        'Content-Type': 'application/json'
    };

    return headers;
}


function processResponse(res) {
    if (res.status === constants.SUCCESS) {
        return res.json();
    } else {
        throw res;
    }
}

export const post = (url, request) => {
    return fetch(url, {
        method: 'POST',
        headers: processHeaders(),
        body: JSON.stringify(request)
    }).then(response => {
        return processResponse(response)
    }).catch(err => {
        errorHandle(err)
        return err;
    })
}

export const get = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: processHeaders(),
    }).then(response => {
        return processResponse(response)
    }).catch(err => {
        errorHandle(err)
        return err;
    })
}


export const _delete = (url) => {
    return fetch(url, {
        method: 'DELETE',
        headers: processHeaders(),
    }).then(response => {
        return processResponse(response)
    }).catch(err => {
        errorHandle(err)
        return err;
    })
}
