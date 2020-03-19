import { productConstants } from '../constants';

export function products(state = {}, action) {
    console.log(action.type);
    switch (action.type) {
        case productConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case productConstants.PRODUCTS_GETALL_SUCCESS:
            return {
                items: action.users
            };
        case productConstants.PRODUCTS_GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}