const url = "http://localhost:6700/courses";

export function products(){

    const output = fetch(url,{method:'GET'})
    .then((res) => res.json())

    return{
        type: 'GET_PRODUCTS',
        payload: output
    }
}