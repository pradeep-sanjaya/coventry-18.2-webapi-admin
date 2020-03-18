import axios from "axios";
import config from 'config';
import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {

    return new Promise((resolve, reject) => {

        var data = {
            username: username,
            password: password
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post('http://localhost:4000/api/v1/auth/login', data, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);

                if (res.data.status == 200 && res.data.user.accessToken != undefined) {

                    let user = {
                        _id: res.data.user._id,
                        firstName: res.data.user.firstName,
                        lastName: res.data.user.lastName,
                        accessToken: res.data.user.accessToken
                    }

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));

                    return Promise.resolve(JSON.stringify(user));

                } else {
                    return Promise.reject(res.data.message);
                    reject(null);
                }

            })
            .catch((err) => {
                logout();
                console.log("AXIOS ERROR: ", err);
                return Promise.reject(err);
            });
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {

    console.log('--- handleResponse ---');
    console.log('response' + response);

    const data = response.data;

    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return Promise.resolve(data.data);

}