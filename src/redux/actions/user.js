import Axios from "axios";
import { API_URL } from "../../constants/API"


export const usernameInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USERNAME",
        payload: text,
    };
};
export const getUsernameHandler = (text) => {
    return {
        type: "GET_USER_LOGIN",
        payload: text,
    };
};
export const loginHendler = (userData) => {
    return (dispatch) => {
        const { username, password } = userData;
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                password,
            }
        })
            .then(res => {
                if (res.data.length > 0) {
                    dispatch({
                        type: "ON_LOGIN_SUCCESS",
                        payload: res.data[0]
                    })
                } else {
                    dispatch({
                        type: "ON_LOGIN_FAIL",
                        payload: "Username atau password salah"
                    })
                }

                console.log(res);

            })
            .catch(err => {
                console.log(err);

            })

    }
}

export const registerHandler = (userData) => {
    return (dispatch) => {
        const { username, password, fullname, role } = userData;
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
            }
        })
 .then(res => {

            if (username && password && fullname && role != "") {
                if (res.data.length == 0) {
                    Axios.post(`${API_URL}/users`, {
                        username,
                        password,
                        role,
                        fullname,
                    })

                        .then(res => {
                            dispatch({
                                type: "ON_REGISTER_SUCCESS",
                                payload: res.data
                            })
                            console.log(res);

                        })
                        .catch(err => {
                            console.log(err);

                        })

                } else {
                    dispatch({
                        type: "ON_REGISTER_FAIL",
                        payload: "Username sudah ada"
                    })
                }
              
            } else {
                dispatch({
                    type: "ON_REGISTER_FAIL2",
                    payload: "Username tidak boleh kosong!"
                })
            }
        })

        .catch(err => {
            console.log(err);

        })

}
}
