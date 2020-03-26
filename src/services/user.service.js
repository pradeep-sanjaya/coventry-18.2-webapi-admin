import axios from "axios";
import { authHeader } from '../helpers';

export const userService = {
    login,
    logout
};

function login(email, password) {

    return new Promise((resolve, reject) => {

        var data = {
            email: email,
            password: password
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post('https://webapi-backend.herokuapp.com/api/v1/auth/login', data, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);

                let user = res.data.data;

                if (res.data.status == 200 && user != undefined) {

                    let userObj = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        accessToken: user.accessToken
                    }

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(userObj));

                    console.log("before return userObj: " + JSON.stringify(userObj));

                    return userObj;

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