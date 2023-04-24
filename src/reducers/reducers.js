//initalState
const initialState = {
  name: "",
  email: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
  photo: "",
  loggedIn: false,
};

//based on action type reducer will act here
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PHONENUMBER":
      return {
        ...state,
        phoneNo: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_CONFIRMPASSWORD":
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.payload,
      };
    case "SET_LOGGEDIN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return { ...state };
  }
};
