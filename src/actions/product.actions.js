import { productConstants } from '../constants';
import { productService } from '../services';
import { history } from '../helpers';

export const productActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        productService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(users) { return { type: productConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}