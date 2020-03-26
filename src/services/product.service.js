import axios from "axios";
import { authHeader } from '../helpers';

export const productService = {
    getAll
};

function getAll() {

    // const requestOptions = {
    //     method: 'GET',
    //     headers: authHeader()
    // };

    return async (dispatch) => {
        try {
            axios.get("https://webapi-backend.herokuapp.com/api/v1/products").then(
                (data) => {
                    console.log(data);
                    dispatch(getAll(data.data.products));
                }
            );
        } catch (err) { }
    };
}
