
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postValues =  (values) => {
   return fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }).then(response => response.json())
}



export const getValues =  () => {
    return fetch(API_URL, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
     }).then(response => response.json())
 }