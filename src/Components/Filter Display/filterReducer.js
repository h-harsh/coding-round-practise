export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'PRICE':
            return {...state, price:action.payload};
        case 'SIZE':
            return {...state, size:action.payload};
        case 'IDEAL_FOR':
            return {...state, idealFor:action.payload};
        case 'BRAND':
            return {...state, brand:action.payload};
        case 'CLEAR_ALL':
            return{...state,price:null, size:null,idealFor:null,brand:null}    
        default:
            return state;
    }
}