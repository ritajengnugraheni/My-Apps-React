const init_state = {
  id: 0,
  username: "",
  fullname: "",
  role: "",
  testing: "",
  testing2: "",
  errMsg :"",
  // isLogin :false

};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else if (action.type === "ON_LOGIN_SUCCESS") {
    const { username, fullname, role, id }=action.payload
    return {
      ...state,
      username,
      fullname,
      role,
      id,
    }
  } else if (action.type === "ON_LOGIN_FAIL") {
    return { ...state,errMsg : action.payload }
  }else if (action.type === "ON_REGISTER_SUCCESS") {
    const { username, fullname, role, id }=action.payload
    return {
      ...state,
      username,
      fullname,
      role,
      id,
    }
  } else if (action.type === "ON_REGISTER_FAIL") {
    return { ...state,errMsg : action.payload }
  } else if (action.type === "ON_LOGOUT") {
    const { username, fullname, role, id }=action.payload
    return {
      ...state,
      username,
      fullname,
      role,
      id,
    }
  }
  return { ...state };
};