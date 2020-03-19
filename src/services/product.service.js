import axios from "axios";
import config from 'config';
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
            axios.get("https://productsnew3.free.beeceptor.com").then(
                (data) => {
                    console.log(data);
                    dispatch(getAll(data.data.products));
                }
            );
        } catch (err) {}
    };
}
