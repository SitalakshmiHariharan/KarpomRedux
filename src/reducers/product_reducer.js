export default function(state={},action){
    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state,product:action.payload}
        default:
            return state
    }
}