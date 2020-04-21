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