const init_state = {
    usernameInput: "",
    // passwordInput:"",
    isLogin:false
  };
  
  export default (state = init_state, action) => {
    if (action.type === "ON_CHANGE_USERNAME") {
      return { ...state, usernameInput: action.payload };
    } else if (action.type=== "GET_USER_LOGIN") {
        return{... state, usernameInput:`Selamat Datang, ${action.payload} `}
    }
    return { ...state };
  };